import React from 'react'; 
import { useState } from 'react';
import Decryption from './decryption'; 

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { prodDependencies } from 'mathjs';
import { placeholder } from '@babel/types';



const Encryption = (props: { N: number; E: number; D: number; encryptedNum: bigint|undefined }) => {
    
    const [bigNumInput, setBigNumInput] = useState<any>(); 

    const [encryptedNum, setEncryptedNum] = useState<bigint>(); 
    const [encryptedNumDisplay, setEncryptedNumDisplay]=useState<string>('none');

    const [message, setMessage] = useState<string>(''); 
    const [charCodeArray, setCharCodeArray] = useState<number[]>([]); 

    const handleNumChange = (e: { target: { value: any; }; }) => {
        let placeholder = (e.target.value);
        console.log('placeholder ', placeholder); 
        placeholder = BigInt(placeholder);
        console.log('bigint ', placeholder); 
        setBigNumInput(placeholder); 
        console.log('inside handleNumInput ', bigNumInput); 

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
                console.log('Promise big int num => ', bigNumInput); 
                let encrypt:bigint = BigInt(bigNumInput); 
                encrypt = (encrypt**bigE)%bigN;
                console.log('NOT STATEFUL encrypt ', encrypt, ' typeof ', typeof encrypt); 
                res(encrypt);
            }
            catch (error) {
                console.log('promise error ... ')
                rej(error); 
            }
        })
    }

    const handleEncryption = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); 
        const encrypt = await handleSetEncryption(); 
        setEncryptedNum(encrypt); 
        // console.log('STATEFUL encrypted num ', encryptedNum); 
    }


    return(
        <div>
            <form>
                <Typography variant='h3'> Encrypt Your Number </ Typography>

                <TextField onChange={handleNumChange} label='Num' /> <br></br>
                <Typography>E = {props.E}</Typography> <br></br>
                <Typography>N = {props.N}</Typography> <br></br>    

                <Button 
                    // style={{display: `${encryptedNumDisplay}`}}
                    variant='outlined'
                    size='large'
                    color='secondary'
                    type='submit' 
                    onClick={handleEncryption}
                >
                    <text>ENCRYPT NUMBER</text>
                </Button>  
            </form>
            <Typography variant='h6'>Encrypted: {encryptedNum ? String(encryptedNum).concat('n') : 'N/A'} </Typography> 

            <Decryption E={props.E} N={props.N} D={props.D} encryptedNum={encryptedNum}/>
        </div>
    )
}

export default Encryption; 