import React, { useState, useEffect } from "../../../pkgs/react";


const OutputDecrypted = (props: { inputNumProp: number; decryptedNum: number | null; }) => {
    const [decryptStyleText, setDecryptStyleText] = useState<React.CSSProperties>({});

    useEffect(() => {
        if (props.decryptedNum !== null) {
            // Convert both to numbers for comparison
            const inputNum = Number(props.inputNumProp);
            const decryptedNum = Number(props.decryptedNum);

            setDecryptStyleText(
                inputNum === decryptedNum
                    ? { color: 'green', textDecoration: 'none', fontWeight: 'bold' }
                    : { color: 'red', textDecoration: 'line-through', fontWeight: 'normal' }
            );
        } else {
            // Reset styles if decryptedNum is null
            setDecryptStyleText({});
        }
    }, [props.inputNumProp, props.decryptedNum]);

    return (
        <h5 style={decryptStyleText}>
            Decrypted: {props.decryptedNum !== null ? props.decryptedNum : 'N/A'}
        </h5>
    );
};

export default OutputDecrypted;

