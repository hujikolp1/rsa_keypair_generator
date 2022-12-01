import React, { useState , useEffect } from 'react'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OutputDecrypted from './outputDecrypted'; 


const Decryption = (props: { N: number; E: number; D: number; encryptedNum: any; inputNumProp: any; decryptedNum: any; }) => {

    const [encryptedNum, setEncryptedNum] = useState<any>(); 
    const [decryptedNum, setDecryptedNum] = useState<number>(); 
    const [changeD, setChangeD] = useState<bigint>(BigInt(props.D));

    useEffect( ()=>{
        setEncryptedNum(props.encryptedNum); 
        return () => {console.log('useEffect done')}
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
        console.log('STATEFUL DEcrypted num ', decryptedNum); 
        console.log('TYPEOF STATEFUL DEcrypted num ', typeof decryptedNum); 
    }

    return(
        <div>
            <form>
                <Typography variant='h3'> Decrypt Your Number </ Typography> <br></br>
                <Typography variant='h5'>Hint: only D = {props.D} will work</Typography> <br></br>
                <TextField onChange={handleChangeD} label='use your private key D!' value={changeD} /> <br></br>
            </form> <br></br>
            <Button
                variant='outlined'
                size='large'
                color='primary'
                type='submit'
                onClick={handleDecryption}
            >
                <text>DECRYPT</text>
            </Button>  

            {decryptedNum && <OutputDecrypted inputNumProp={props.inputNumProp} decryptedNum={decryptedNum} />}
        </div>
    )
}

export default Decryption; 