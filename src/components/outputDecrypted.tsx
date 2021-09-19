import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

const OutputDecrypted = (props: {inputNumProp: number; decryptedNum: any }) => {
    const [decryptStyleText, setDecryptStyleText] = useState<Object>({}); 

    useEffect( () => {
        return () => {}
    },[props.decryptedNum])


    const changeStyleColors = () => {
        let original = Number(props.inputNumProp);
        let unoriginal = Number(props.decryptedNum);

        console.log("ORIGINAL => ", original);
        console.log("TYPEOF original) => ", typeof original);
        console.log("unoriginal => ", unoriginal);
        console.log("TYPEOF unoriginal => ", typeof unoriginal);

        if(original == unoriginal) {
            setDecryptStyleText({color: 'green',textDecoration:'none',fontWeight:'bold'});
        } else if (original != unoriginal) {
            setDecryptStyleText({color: 'red', textDecoration:'line-through',fontWeight:'none'});
        }
    }

    
    return (
        <Typography variant='h5'>
            Decrypted: {props.decryptedNum ? props.decryptedNum : 'N/A'} 
        </Typography> 
    )
}

export default OutputDecrypted; 