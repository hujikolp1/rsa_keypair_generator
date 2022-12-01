import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

const OutputDecrypted = (props: {inputNumProp: number; decryptedNum: any; }) => {
    const [decryptStyleText, setDecryptStyleText] = useState<Object>({}); 

    useEffect( () => {
        if( Number(props.inputNumProp) == Number(props.decryptedNum) ) {
            setDecryptStyleText({color: 'green',textDecoration:'none',fontWeight:'bold'});
        } else {
            setDecryptStyleText({color: 'red', textDecoration:'line-through',fontWeight:'none'});
        }
        return () => {}
    },[props.decryptedNum])

    
    return (
        <Typography style={ decryptStyleText } variant='h5'>
            Decrypted: { props.decryptedNum ? props.decryptedNum : 'N/A' } 
        </Typography> 
    )
}

export default OutputDecrypted; 