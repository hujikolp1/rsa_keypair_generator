import React from 'react'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Encryption = () => {

    return(
        <div>
            <form>
                <Typography variant='h5'> Encrypt Your Message </ Typography>

                <TextField label='Message' /> <br></br>
                <TextField label='E' /> <br></br>
                <TextField label='N' /> <br></br>     
            </form>
            <Button />         


        </div>
    )
}

export default Encryption; 