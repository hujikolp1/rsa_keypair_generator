import React, { useState , useEffect } from 'react'; 
import OutputDecrypted from './outputDecrypted'; 


const Decryption = (props: { N: number; E: number; D: number; encryptedNum: any; inputNumProp: any; decryptedNum: any; }) => {

    const [encryptedNum, setEncryptedNum] = useState<any>(); 
    const [decryptedNum, setDecryptedNum] = useState<number>(); 
    const [changeD, setChangeD] = useState<bigint>(BigInt(props.D));

    useEffect( ()=>{
        setEncryptedNum(props.encryptedNum); 
        return () => {}
    }, [encryptedNum]);

    const handleNumChange = (e: { target: { value: any; }; }) => {
        let placeholder = (e.target.value);
        placeholder = BigInt(placeholder);
        setEncryptedNum(placeholder);
    }
    const handleChangeD = (e: { target: { value: any; }; }) => {
        let placeholder = (e.target.value);
        setChangeD(placeholder);
    };
    const handleSetDecryption = ():Promise<number> => {
        return new Promise( (res, rej) => {
            try {
                let bigD:any; 
                let bigN:any; 
                let bigEncrypt:any;
                try {
                    bigD = BigInt(changeD);
                    bigN = BigInt(props.N); 
                    bigEncrypt = encryptedNum; 
                    bigEncrypt = BigInt(encryptedNum); 
                }
                catch(err){
                    alert('Not a Number'); 
                    console.error('Check Decryption.tsx component for error: ', err);
                    return -1; 
                }
                // ----------------------------------------
                // --------------- decrypt
                let bigPow = bigEncrypt**bigD ; 
                let bigDecrypt = bigPow % bigN; 
                // E^D mod N 
                // ----------------------------------------
                let numberizeDecrypt = Number(bigDecrypt); 
                res(numberizeDecrypt);
            }
            catch (error) {
                console.error('decrypt promise error ... ')
                rej(error); 
            }
        })
    }

    const handleDecryption = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); 
        let decrypt = await handleSetDecryption(); 
        decrypt = Number(decrypt); 
        setDecryptedNum(decrypt); 
        // console.log('STATEFUL DEcrypted num ', decryptedNum); 
        // console.log('TYPEOF STATEFUL DEcrypted num ', typeof decryptedNum); 
    }

    return(
        <div>
            <form>
                <h3> Decrypt Your Number </ h3> <br></br>
                <h5>Hint: only D = {props.D} will work</h5> <br></br>
                <input onChange={handleChangeD} placeholder='use your private key D!' value={String(changeD)} /> <br></br>
            </form> <br></br>
            <button
                type='submit'
                onClick={handleDecryption}
            >
                <text>DECRYPT</text>
            </button>  

            {decryptedNum && <OutputDecrypted inputNumProp={props.inputNumProp} decryptedNum={decryptedNum} />}
        </div>
    )
}

export default Decryption; 