import React, { useState , useEffect} from 'react'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Decryption = (props: { N: number; E: number; D: number; encryptedNum: bigint|undefined }) => {

    const [encryptedNumProps, setEncryptedNumProps] = useState<bigint>(); 
    const [encryptedNum, setEncryptedNum] = useState<bigint>(); 
    const [decryptedNum, setDecryptedNum] = useState<number>(); 

    useEffect( ()=>{
        console.log('pulled in encrypted Num => ', props.encryptedNum);
        setEncryptedNumProps(props.encryptedNum); 
        return () => {}
    }, [encryptedNum]);

    const handleNumChange = (e: { target: { value: any; }; }) => {
        let placeholder = (e.target.value);
        placeholder = setEncryptedNum(placeholder);
        console.log('setEncryptedNum: ', encryptedNum);

    }
    const handleSetDecryption = ():Promise<number> => {
        return new Promise( (res, rej) => {
            try {
                let bigD = props.D; 
                let bigN = props.N; 
                // cast from bigint back into number type 
                let numCrypt = Number(encryptedNum)

                // decrypt
                let decrypt = Number( (numCrypt**bigD)%bigN ); 
                // E^D mod N 

                // encrypt = (encrypt**bigE)%bigN;
                console.log('NOT STATEFUL decrypt ', decrypt, ' typeof ', typeof decrypt); 
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
        console.log('STATEFUL DEcrypted num ', decryptedNum); 
    }



    return(
        <div>
            <form>
                <Typography variant='h3'> Decrypt Your Number </ Typography>

                <TextField onChange={handleNumChange} label='Num to Decrypt' /> <br></br>
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