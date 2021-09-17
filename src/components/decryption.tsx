import React, { useState } from 'react'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Decryption = (props: { N: number; E: number; D: number; encryptedNum: bigint|undefined }) => {
    const [encryptedNum, setEncryptedNum] = useState<bigint|undefined>(); 
    const [decryptedNum, setDecryptedNum] = useState<number>(-1); 

    // useState( ()=>{
    //     console.log('pulled in encrypted Num => ', props.encryptedNum)
    //     setEncryptedNum(props.encryptedNum); 
    //     return () => {}
    // });

    const handleNumChange = (e: { target: { value: any; }; }) => {
        let placeholder = (e.target.value);
        console.log('placeholder ', placeholder); 
        placeholder = BigInt(placeholder);
        console.log('bigint ', placeholder); 
        console.log('inside handleNumInput ', ); 

    }
    const handleSetDecryption = ():Promise<bigint> => {
        return new Promise( (res, rej) => {
            try {
                let bigD = BigInt(props.D); 
                let bigN = BigInt(props.N); 
                console.log('Promise big int num => ', ); 
                let encrypt = props.encryptedNum; 

                // decrypt
                let decrypt = (encryptedNum**bigD)%bigN; 
                // E^D mod N 

                // encrypt = (encrypt**bigE)%bigN;
                console.log('NOT STATEFUL encrypt ', ' typeof ', typeof encrypt); 
                res(decrypt);
            }
            catch (error) {
                console.log('decrypt promise error ... ')
                rej(error); 
            }
        })
    }

    const handleDecryption = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); 
        const decrypt = await handleSetDecryption(); 
        setDecryptedNum(decrypt); 
        console.log('STATEFUL DEcrypted num ', encryptedNum); 
    }



    return(
        <div>
            <form>
                <Typography variant='h3'> Decrypt Your Number </ Typography>

                <TextField onChange={handleNumChange} label='Num to Decrypt' value={encryptedNum}/> <br></br>
                <Typography>D = {props.D}</Typography> <br></br>
                <Typography>N = {props.N}</Typography> <br></br>     
            </form>
            <Button
                variant='outlined'
                size='large'
                color='secondary'
                type='submit'
                onClick={handleDecryption}
            >
                <text>DECRYPT NUMBER</text>
            </Button>  

            <Typography variant='h6'>Decrypted: {decryptedNum ? decryptedNum : 'N/A'} </Typography> 
     
        </div>
    )
}

export default Decryption; 