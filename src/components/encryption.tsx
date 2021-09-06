import React from 'react'; 
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { prodDependencies } from 'mathjs';



const Encryption = (props) => {
    const handleEncryption = (e) => {
        e.preventDefault(); 
        console.log(e.target.value)
    }

    return(
        <div>
            <form>
                <Typography variant='h5'> Encrypt Your Message </ Typography>

                <TextField label='Message' /> <br></br>
                <TextField label='E' value={props.E}/> <br></br>
                <TextField label='N' value={props.N}/> <br></br>     

                <Button type='submit' onClick={handleEncryption}>ENCRYPT</Button>        
            </form>


        </div>
    )
}

export default Encryption; 