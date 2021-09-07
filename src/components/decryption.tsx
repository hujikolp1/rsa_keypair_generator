import React from 'react'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const Decryption = (props) => {

    return(
        <div>
            <form>
                <Typography variant='h1'> Decrypt Your Number </ Typography>

                <TextField label='Num' /> <br></br>
                <TextField label='D' value = {props.D}/> <br></br>
                <TextField label='N' value={props.N}/> <br></br>     
            </form>
            <Button
                variant='outlined'
                size='large'
                color='secondary'
            >
                DECRYPT
            </Button>       


        </div>
    )
}

export default Decryption; 