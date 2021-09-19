import React from 'react'; 
import { useState, useEffect } from 'react';
import Decryption from './decryption'; 

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { bignumber, prodDependencies } from 'mathjs';
import { placeholder } from '@babel/types';



const Encryption = (props: { N: number; E: number; D: number; encryptedNum: any; inputNumProp: any; }) => {
    
    const [bigNumInput, setBigNumInput] = useState<any>(); 
    const [inputNumProp, setInputNumProp] = useState<any>(); 


    const [encryptedNum, setEncryptedNum] = useState<bigint>(); 
    const [encryptedNumDisplay, setEncryptedNumDisplay]=useState<string>('none');

    const [message, setMessage] = useState<string>(''); 
    const [charCodeArray, setCharCodeArray] = useState<number[]>([]); 

    useEffect( () => {
        return () => {}
    }, [bigNumInput]); 

    const handleNumChange = (e: { target: { value: any; }; }) => {
        let placeholder = (e.target.value);
        console.log('handleNumChange placeholder => ', placeholder); 
        setInputNumProp(placeholder); 
        placeholder = BigInt(placeholder);
        setBigNumInput(placeholder); 
    }


    //--------------------------------------------------------------------------------
    // ------------------  handleStringEncryption 
    //--------------------------------------------------------------------------------

    // string => binary or hex representation
    // binary => original string 

    // const handleStringEncryption = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault(); 
    //     // make message into array of chars 
    //     let charArray:string[] = message.split('')
    //     let intArray:number[] = []; 
    //     // make array of chars into array of character codes 
    //     // also maintain order, either push or shift 
    //     for(let i = 0; i < charArray.length; i++) {
    //         let index = charArray[i].charCodeAt(0);
    //         intArray.push(index); 
    //     }
    //     setCharCodeArray(intArray); 


    //     console.log('INT ARRAY: ', intArray); 
    //     console.log('Char Code Array: ', charCodeArray)

    //     // encrypt character codes with public key E
    //     let encryptedIntArray:number[] = []; 
    //     for (let i = 0; i < intArray.length; i++) {
    //         let index = ((intArray[i] ** props.E) % props.N);
    //         encryptedIntArray.push(index); 
    //     }
    //     console.log("!!!!! ", encryptedIntArray)

    // }
    //--------------------------------------------------------------------------------

    const handleSetEncryption = ():Promise<bigint> => {
        return new Promise( (res, rej) => {
            try {
                let bigE = BigInt(props.E); 
                let bigN = BigInt(props.N); 
                let bigEncrypted = BigInt(bigNumInput);
                let encrypt:bigint = BigInt(bigNumInput); 
                encrypt = (encrypt**bigE)%bigN;
                console.log('NOT STATEFUL encrypt ', encrypt, ' typeof ', typeof encrypt); 
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
    }


    return(
        <div className='encryptionContainer'>
            <form id='numToEncryptForm'>
                <div style={{border:'3px solid black'}}>
                    <Typography>E = {props.E}</Typography> <br></br>
                    <Typography>N = {props.N}</Typography> <br></br>   
                    <Typography>D = {props.D}</Typography>  
                </div> 
                <Typography variant='h3'> Encrypt Your Number </ Typography> <br></br>
                <TextField onChange={handleNumChange} label='Num to Encrypt' /> <br></br><br></br>

                <Button 
                    // style={{display: `${encryptedNumDisplay}`}}
                    variant='outlined'
                    size='large'
                    color='primary'
                    type='submit' 
                    onClick={handleEncryption}
                >
                    <text>ENCRYPT</text>
                </Button>  
            </form> <br></br>
            <Typography variant='h5'>Your Original Num = {inputNumProp?inputNumProp:'N/A'}</Typography> <br></br>
            <Typography variant='h5'>Your Encrypted Num = {encryptedNum ? String(encryptedNum) : 'N/A'} </Typography> <br></br> 

            {encryptedNum && <Decryption E={props.E} N={props.N} D={props.D} encryptedNum={encryptedNum} inputNumProp={inputNumProp} decryptedNum={undefined} />}
        </div>
    )
}

export default Encryption; 