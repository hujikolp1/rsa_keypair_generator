import React from '../../../pkgs/react'; 
import { useState, useEffect } from '../../../pkgs/react';
import Decryption from './decryption.tsx'; 

import './encryption.css';

const Encryption = (props: {
        N: number; 
        E: number; 
        D: number; 
        encryptedNum: number | undefined; 
        inputNumProp: number
    }) => {
    const [bigNumInput, setBigNumInput] = useState<string>(''); 
    const [inputNumProp, setInputNumProp] = useState<string>(''); 
    const [encryptedNum, setEncryptedNum] = useState<bigint | null>(null); 

    useEffect(() => {
        return () => {};
    }, [bigNumInput]); 

    const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const placeholder = e.target.value;
        setInputNumProp(placeholder); 
        setBigNumInput(placeholder); 
    };

    const modExp = (base: bigint, exponent: bigint, mod: bigint): bigint => {
        let result = BigInt(1);
        base = base % mod;
    
        while (exponent > BigInt(0)) {
            if (exponent % BigInt(2) === BigInt(1)) {
                result = (result * base) % mod;
            }
            exponent = exponent >> BigInt(1); // Divide exponent by 2
            base = (base * base) % mod;
        }
    
        return result;
    };
    
    

    const handleSetEncryption = (): Promise<bigint> => {
        return new Promise((res, rej) => {
            try {
                const bigE = BigInt(props.E); 
                const bigN = BigInt(props.N); 
                const bigNumInputBigInt = BigInt(bigNumInput);
                const encrypt = modExp(bigNumInputBigInt, bigE, bigN);
                res(encrypt);
            } catch (error) {
                console.error('Encryption error: ', error);
                rej(error); 
            }
        });
    };

    const handleEncryption = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        let numToEncrypt: bigint;
        try {
            numToEncrypt = BigInt(bigNumInput);
        } catch {
            alert('Please enter a valid number.');
            return; 
        }

        if (numToEncrypt >= (props.N - 1)) {
            alert('Number to Encrypt must be less than N - 1'); 
            return; 
        }

        const encrypt = await handleSetEncryption(); 
        setEncryptedNum(encrypt); 
        setBigNumInput('');
    };

    return (
        <div className='cryptContainer'>
            <div className='encryptSection'>
                <form id='numToEncryptForm' onSubmit={handleEncryption}>
                    <div> Encrypt Your Number </div>
                    <input 
                        id='numInputTextField' 
                        value={bigNumInput} 
                        onChange={handleNumChange} 
                        placeholder="Enter a number to encrypt"
                    />
                    <button type='submit'>
                        <div>ENCRYPT</div>
                    </button>  
                </form>
                <div className='encryptedNumsDisplay'>
                    <div>Your Original Num = {inputNumProp || 'N/A'}</div>
                    <div>Your Encrypted Num = {encryptedNum ? String(encryptedNum) : 'N/A'} </div>
                </div>                
            </div>
            <div className={`decryptSection ${encryptedNum ? 'active' : ''}`}>
                <div>
                    {encryptedNum && (
                        <Decryption 
                            E={props.E} 
                            N={props.N} 
                            D={props.D} 
                            encryptedNum={encryptedNum} 
                            inputNumProp={inputNumProp} 
                            decryptedNum={undefined} 
                        />
                    )}                    
                </div>
            </div>
        </div>

    );
};

export default Encryption;
