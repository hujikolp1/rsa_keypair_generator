import React, { useState } from 'react'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Decryption = (props: { N: number; E: number; D: number; encryptedNum: bigint|undefined }) => {
    const [decrypted, setDecrypted] = useState<number>(-1); 

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
                let bigE = BigInt(props.E); 
                let bigN = BigInt(props.N); 
                console.log('Promise big int num => ', ); 
                // let encrypt:bigint = BigInt(); 
                // encrypt = (encrypt**bigE)%bigN;
                console.log('NOT STATEFUL encrypt ', ' typeof ', typeof encrypt); 
                res(encrypt);
            }
            catch (error) {
                console.log('promise error ... ')
                rej(error); 
            }
        })
    }

    const handleDecryption = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); 
        const encrypt = await handleSetDecryption(); 
        // console.log('STATEFUL encrypted num ', encryptedNum); 
    }



    return(
        <div>
            <form>
                <Typography variant='h3'> Decrypt Your Number </ Typography>

                <TextField label='Num to Decrypt' value={props.encryptedNum}/> <br></br>
                <Typography>D = {props.D}</Typography> <br></br>
                <Typography>N = {props.N}</Typography> <br></br>     
            </form>
            <Button
                variant='outlined'
                size='large'
                color='secondary'
            >
                <text>DECRYPT NUMBER</text>
            </Button>  

            {/* <Typography variant='h6'>Decrypted: {props.encryptedNum ? String(props.encryptedNum).concat('n') : 'N/A'} </Typography>  */}
     
        </div>
    )
}

export default Decryption; 