import React, { useState , useEffect } from '../../../pkgs/react'; 
import OutputDecrypted from './outputDecrypted.tsx'; 


const Decryption = (props: { N: number; D: number; E: number; encryptedNum: any; inputNumProp: any; }) => {
    const [decryptedNum, setDecryptedNum] = useState<number>(); 
    const [changeD, setChangeD] = useState<BigInt>(BigInt(props.D)); // Store D as BigInt

    useEffect(() => {
        setChangeD(BigInt(props.D)); // Update state if props.D changes
    }, [props.D]);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Enter") {
                event.preventDefault();
                handleDecryption();
            }
        };

        window.addEventListener("keypress", handleKeyPress);
        return () => {
            window.removeEventListener("keypress", handleKeyPress);
        };
    }, []); // Empty dependency array to add listener once

    const handleChangeD = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (value.length >= 7) {
            alert('ERR: BigInt overflow. Value of D is too large.');
            setChangeD(BigInt(props.D));
        } else {
            setChangeD(BigInt(value));
        }
    };

    const handleSetDecryption = async (): Promise<number> => {
        try {
            const bigD = changeD;
            const bigN = BigInt(props.N); 
            const bigEncrypt = BigInt(props.encryptedNum);

            // Decrypt
            const bigPow = bigEncrypt ** bigD; 
            const bigDecrypt = bigPow % bigN; 
            
            return Number(bigDecrypt);
        } catch (error) {
            console.error('Decryption error: ', error);
            throw error; 
        }
    };

    const handleDecryption = async (e?: React.FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        try {
            const decrypt = await handleSetDecryption(); 
            setDecryptedNum(decrypt); 
        } catch (error) {
            console.error('Decryption failed: ', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleDecryption}>
                <h3>Decrypt Your Number</h3>
                <h5>Hint: only D = {props.D} will work</h5>
                <input 
                    onChange={handleChangeD} 
                    placeholder='Use your private key D!' 
                    value={String(changeD)} 
                />
                <button type='submit'>
                    <div>DECRYPT</div>
                </button>
            </form>
            {decryptedNum && <OutputDecrypted inputNumProp={props.inputNumProp} decryptedNum={decryptedNum} />}
        </div>
    );
};

export default Decryption;
