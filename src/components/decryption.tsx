import React from 'react'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Decryption = (props: { N: number; E: number; D: number; encryptedNum: bigint }) => {

    return(
        <div>
            <form>
                <Typography variant='h3'> Decrypt Your Number </ Typography>

                <TextField label='Num' /> <br></br>
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

            {/* <Typography variant='h6'>Decrypted: {encryptedNum ? String(encryptedNum).concat('n') : 'N/A'} </Typography>  */}
     
        </div>
    )
}

export default Decryption; 