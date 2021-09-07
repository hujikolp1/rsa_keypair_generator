import React from 'react'; 
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { prodDependencies } from 'mathjs';
import { placeholder } from '@babel/types';



const Encryption = (props: { N: number; E: number; }) => {
    
    const [bigNumInput, setBigNumInput] = useState<any>(); 
    const [encryptedNum, setEncryptedNum] = useState<bigint>(); 

    const [message, setMessage] = useState<string>(''); 
    const [charCodeArray, setCharCodeArray] = useState<number[]>([]); 

    const handleNumInput = (e: { target: { value: any; }; }) => {
        let placeholder = (e.target.value);
        console.log('placeholder ', placeholder); 
        placeholder = BigInt(placeholder);
        console.log('bigint ', placeholder); 

        // if( typeof placeholder === 'bigint' && placeholder < props.N - 2) { 
        //     setNumInput(placeholder);
        // }
        // else {
        //     if(typeof placeholder !== 'bigint'){
        //         setNumInput(BigInt(0)); 
        //         alert('Please only input numbers');
        //     }
        //     else if (placeholder >= props.N - 2){
        //         setNumInput(BigInt(0));
        //         alert('Please input a number smaller than N - 2'); 
        //     }
        // }
        setBigNumInput(placeholder); 
        console.log('num input: ', bigNumInput); 
    }

    //--------------------------------------------------------------------------------
    // ------------------  handleStringEncryption 
    //--------------------------------------------------------------------------------

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

    const handleEncryption = (e: { preventDefault: () => void; }) => {
        e.preventDefault(); 
        let bigE = BigInt(props.E); 
        let bigN = BigInt(props.N); 
        let encrypt:any = BigInt(bigNumInput); 
        encrypt = (encrypt**bigE)%bigN;
        console.log('encrypt ', encrypt, ' typeof ', typeof encrypt); 

        setEncryptedNum(encrypt);
        console.log('encrypted num ', encryptedNum); 
        if(!encryptedNum){
            setEncryptedNum(encrypt); 
        }
        console.log('AGAIN encrypted num ', encryptedNum); 

    }

    return(
        <div>
            <form>
                <Typography variant='h1'> Encrypt Your Number </ Typography>

                <TextField onChange={handleNumInput} label='Num' /> <br></br>
                <TextField label='E' value={props.E}/> <br></br>
                <TextField label='N' value={props.N}/> <br></br>     

                <Button 
                    variant='outlined'
                    size='large'
                    color='primary'
                    onClick={handleEncryption}
                >
                    Calculate
                </Button>

                <Button 
                    variant='outlined'
                    size='large'
                    color='secondary'
                    type='submit' 
                    onClick={handleEncryption}
                >
                    ENCRYPT
                </Button>        
            </form>
            <Typography variant='h6'>Encrypted: {encryptedNum}</Typography> 


        </div>
    )
}

export default Encryption; 