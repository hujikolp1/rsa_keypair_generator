import React from '../../../pkgs/react'; 
import { useState, useEffect } from '../../../pkgs/react';
import Decryption from './decryption.tsx'; 

const Encryption = (props: { N: number; E: number; D: number; encryptedNum: any; inputNumProp: any; }) => {
    
    const [bigNumInput, setBigNumInput] = useState<any>(); 
    const [inputNumProp, setInputNumProp] = useState<any>(); 
    const [encryptedNum, setEncryptedNum] = useState<bigint>(); 

    useEffect( () => {
        return () => {}
    }, [bigNumInput]); 

    const handleNumChange = (e: { target: { value: any; }; }) => {
        let placeholder = (e.target.value);
        setInputNumProp(placeholder); 
        try {
            placeholder = BigInt(placeholder);
        }
        catch(err){
            console.error('Check Encryption.tsx component for error: ', err);
        }
        setBigNumInput(placeholder); 
    }

    const handleSetEncryption = ():Promise<bigint> => {
        return new Promise( (res, rej) => {
            try {
                let bigE = BigInt(props.E); 
                let bigN = BigInt(props.N); 
                let encrypt:any = BigInt(bigNumInput);
                encrypt = (encrypt**bigE)%bigN;
                res(encrypt);
            }
            catch (error) {
                console.error('encryption error ... ')
                rej(error); 
            }
        })
    }

    const handleEncryption = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); 
        if( (bigNumInput >= (props.N -2)) || typeof bigNumInput !== 'bigint' ) {
            alert('Num to Encrypt must be a number less than N - 2'); 
            setBigNumInput(null); 
            return; 
        }
        const encrypt = await handleSetEncryption(); 
        setEncryptedNum(encrypt); 
        document.getElementById('numInputTextField')!.remove();  
        document.getElementById('numInputButton')!.remove();  

    }


    return(
        <div className='encryptionContainer'>
            <form id='numToEncryptForm'>
                <div style={{border:'3px solid black'}}>
                    <div>E = {props.E}</div>
                    <div>N = {props.N}</div> 
                    <div>D = {props.D}</div>  
                </div> 
                <h3> Encrypt Your Number </ h3>
                <input id='numInputTextField' onChange={handleNumChange} />

                <button 
                    id='numInputButton'
                    type='submit' 
                    onClick={handleEncryption}
                >
                    <div>ENCRYPT</div>
                </button>  
            </form>
            <h5>Your Original Num = {inputNumProp?inputNumProp:'N/A'}</h5>
            <h5>Your Encrypted Num = {encryptedNum ? String(encryptedNum) : 'N/A'} </h5>
            {encryptedNum && <Decryption E={props.E} N={props.N} D={props.D} encryptedNum={encryptedNum} inputNumProp={inputNumProp} decryptedNum={undefined} />}
        </div>
    )
};

export default Encryption; 