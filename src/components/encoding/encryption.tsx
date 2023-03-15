import React from 'react'; 
import { useState, useEffect } from 'react';
import Decryption from './decryption'; 

const Encryption = (props: { N: number; E: number; D: number; encryptedNum: any; inputNumProp: any; }) => {
    
    const [bigNumInput, setBigNumInput] = useState<any>(); 
    const [inputNumProp, setInputNumProp] = useState<any>(); 
    const [encryptedNum, setEncryptedNum] = useState<bigint>(); 

    // --------- needed for string message encryption 
    const [message, setMessage] = useState<string>(''); 
    const [charCodeArray, setCharCodeArray] = useState<number[]>([]); 
    // ---------

    useEffect( () => {
        return () => {}
    }, [bigNumInput]); 

    const handleNumChange = (e: { target: { value: any; }; }) => {
        let placeholder = (e.target.value);
        // console.log('handleNumChange placeholder => ', placeholder); 
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
                //console.log('NOT STATEFUL encrypt ', encrypt, ' typeof ', typeof encrypt); 
                res(encrypt);
            }
            catch (error) {
                console.log('encrypt promise error ... ')
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
        // console.log('STATEFUL encrypted num ', encryptedNum); 
        document.getElementById('numInputTextField')!.remove();  
        document.getElementById('numInputButton')!.remove();  

    }


    return(
        <div className='encryptionContainer'>
            <form id='numToEncryptForm'>
                <div style={{border:'3px solid black'}}>
                    <div>E = {props.E}</div> <br></br>
                    <div>N = {props.N}</div> <br></br>   
                    <div>D = {props.D}</div>  
                </div> 
                <h3> Encrypt Your Number </ h3> <br></br>
                <input id='numInputTextField' onChange={handleNumChange} /> <br></br><br></br>

                <button 
                    id='numInputButton'
                    type='submit' 
                    onClick={handleEncryption}
                >
                    <text>ENCRYPT</text>
                </button>  
            </form> <br></br>
            <h5>Your Original Num = {inputNumProp?inputNumProp:'N/A'}</h5> <br></br>
            <h5>Your Encrypted Num = {encryptedNum ? String(encryptedNum) : 'N/A'} </h5> <br></br> 

            {encryptedNum && <Decryption E={props.E} N={props.N} D={props.D} encryptedNum={encryptedNum} inputNumProp={inputNumProp} decryptedNum={undefined} />}
        </div>
    )
}

export default Encryption; 