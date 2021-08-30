import React from 'react'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Decryption = () => {

    return(
        <div>
            <form>
                <Typography variant='h5'> Decrypt Your Message </ Typography>

                <TextField label='Encrypted Blob' /> <br></br>
                <TextField label='D' /> <br></br>
                <TextField label='N' /> <br></br>     
            </form>
            <Button />         


        </div>
    )
}

export default Decryption; 