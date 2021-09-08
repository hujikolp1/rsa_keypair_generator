import React from 'react';
import { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CalcEncrypt = (props: { bigNumInput: bigint  }) => {
    const [encryptedNum, setEncryptedNum] = useState<bigint>(); 

    const handleSetEncryption = () => {

    }

    const handleEncryption = async (e: { preventDefault: () => void; }) => {
        e.preventDefault(); 

    }

    return(
        <React.Fragment>
            <Button 
                // style={{display: `${encryptedNumDisplay}`}}
                variant='outlined'
                size='large'
                color='secondary'
                type='submit' 
                onClick={handleEncryption}
            >
                ENCRYPT
            </Button>  
        </React.Fragment>

    )
}

export default CalcEncrypt; 