import React from '../../../pkgs/react'; 
import { useState, useEffect } from '../../../pkgs/react';
import Decryption from './decryption.tsx'; 


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

    const handleSetEncryption = (): Promise<bigint> => {
        return new Promise((res, rej) => {
            try {
                const bigE = BigInt(props.E); 
                const bigN = BigInt(props.N); 
                const encrypt = (BigInt(bigNumInput) ** bigE) % bigN;
                res(encrypt);
            } catch (error) {
                console.error('Encryption error: ', error);
                rej(error); 
            }
        });
    };

    const handleEncryption = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        // Convert bigNumInput to BigInt and check the value
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
        <div className='encryptionContainer'>
            <form id='numToEncryptForm' onSubmit={handleEncryption}>
                <h3> Encrypt Your Number </h3>
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
            <h5>Your Original Num = {inputNumProp || 'N/A'}</h5>
            <h5>Your Encrypted Num = {encryptedNum ? String(encryptedNum) : 'N/A'} </h5>
            {encryptedNum && <Decryption E={props.E} N={props.N} D={props.D} encryptedNum={encryptedNum} inputNumProp={inputNumProp} decryptedNum={undefined} />}
        </div>
    );
};

export default Encryption;
