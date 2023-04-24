import React, { useState , useEffect } from '../../../pkgs/react'; 
import OutputDecrypted from './outputDecrypted.tsx'; 


const Decryption = (props: { N: number; E: number; D: number; encryptedNum: any; inputNumProp: any; decryptedNum: any; }) => {

    const [encryptedNum, setEncryptedNum] = useState<any>(); 
    const [decryptedNum, setDecryptedNum] = useState<number>(); 
    const [changeD, setChangeD] = useState<bigint>(BigInt(props.D));

    useEffect( ()=>{
        setEncryptedNum(props.encryptedNum); 
        return () => {}
    }, [encryptedNum]);

    useEffect(() => {
        window.addEventListener("keypress", handleKeyPress);
        return () => {
          window.removeEventListener("keypress", handleKeyPress);
        };
      });

    const handleChangeD = (e: { target: { value: any; }; }) => {
        let placeholder = (e.target.value);
        if (placeholder.length >= 7) {
            alert('ERR: BigInt overflow. Value of D is too large.');
            setChangeD(props.D);
        } else {
            setChangeD(placeholder);
        }
    };

    const handleKeyPress = (event: { preventDefault: any; key: string; keyCode: number; }) => {
        if (event.key === "Enter" || event.keyCode === 13 ) {
            event.preventDefault();
            handleDecryption();
        }
    };

    const handleSetDecryption = ():Promise<number> => {
        return new Promise( (res, rej) => {
            try {
                let bigD:any; 
                let bigN:any; 
                let bigEncrypt:any;
                try {
                    bigD = BigInt(changeD);
                    bigN = BigInt(props.N); 
                    bigEncrypt = encryptedNum; 
                    bigEncrypt = BigInt(encryptedNum); 
                }
                catch(err){
                    alert('Not a Number'); 
                    console.error('Check Decryption.tsx component for error: ', err);
                    return -1; 
                }
                // ----------------------------------------
                // --------------- decrypt
                let bigPow = bigEncrypt**bigD ; 
                let bigDecrypt = bigPow % bigN; 
                // E^D mod N 
                // ----------------------------------------
                let numberizeDecrypt = Number(bigDecrypt); 
                res(numberizeDecrypt);
            }
            catch (error) {
                console.error('decryption error ... ')
                rej(error); 
            }
        })
    }

    const handleDecryption = async (e?: { preventDefault: () => void; }) => {
        e?.preventDefault();
        let decrypt = await handleSetDecryption(); 
        decrypt = Number(decrypt); 
        setDecryptedNum(decrypt); 
    }

    return(
        <div>
            <form>
                <h3> Decrypt Your Number </ h3>
                <h5>Hint: only D = {props.D} will work</h5>
                <input onChange={handleChangeD} placeholder='use your private key D!' value={String(changeD)} />
            </form>
            <button
                type='submit'
                onClick={handleDecryption}
                onKeyPress={handleKeyPress}
            >
                <div>DECRYPT</div>
            </button>  
            {decryptedNum && <OutputDecrypted inputNumProp={props.inputNumProp} decryptedNum={decryptedNum} />}
        </div>
    )
}

export default Decryption; 