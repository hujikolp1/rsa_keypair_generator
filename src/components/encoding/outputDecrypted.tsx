import React, { useState, useEffect } from "react";

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
        <h5 style={ decryptStyleText }>
            Decrypted: { props.decryptedNum ? props.decryptedNum : 'N/A' } 
        </h5> 
    )
}

export default OutputDecrypted; 