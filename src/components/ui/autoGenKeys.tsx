import React from '../../../pkgs/react';
import { useState, useEffect } from '../../../pkgs/react';

import { genPrimeArr } from '../mainFunctions/genPrimeArr.tsx';
import { genRandomPrimes } from '../mainFunctions/genRandomPrimes.tsx'; 
import { generateE } from '../mainFunctions/generateE.tsx'; 
import { generateD } from '../mainFunctions/generateD.tsx'; 

import Encryption from '../encoding/encryption.tsx'; 

const AutoGenKeys: React.FC = ({...props}) => {
    const [primeArray, setPrimeArray] = useState<number[]>([]); 
    const [randomPrimes, setRandomPrimes] = useState<number[]>([]);
    const [p1, setP1] = useState<number | null>(null);
    const [p2, setP2] = useState<number | null>(null);
    const [N, setN] = useState<number | null>(null); 
    const [phiN, setPhiN] = useState<number | null>(null); 
    const [E, setE] = useState<number | null>(null); 
    const [D, setD] = useState<number | null>(null); 
    const [showFormulas, setShowFormulas] = useState<boolean>(false);

    useEffect(() => {
        const generatedPrimeArray: number[] = genPrimeArr(); 
        setPrimeArray(generatedPrimeArray); 

        const generatedRandomPrimes: number[] = genRandomPrimes(generatedPrimeArray); 
        setRandomPrimes(generatedRandomPrimes); 
        setP1(generatedRandomPrimes[0]);
        setP2(generatedRandomPrimes[1]); 
        setN(generatedRandomPrimes[0] * generatedRandomPrimes[1]);
        setPhiN((generatedRandomPrimes[0] - 1) * (generatedRandomPrimes[1] - 1));

        const generatedE: number = generateE(
            generatedRandomPrimes[0] * generatedRandomPrimes[1], 
            ( (generatedRandomPrimes[0] - 1) * (generatedRandomPrimes[1] - 1) )
        ); 
        setE(generatedE); 

        const generatedD: number = generateD(
            ( (generatedRandomPrimes[0] - 1) * (generatedRandomPrimes[1] - 1) ),
            generatedE
        ); 
        if (generatedD !== generatedE) {
            setD(generatedD);
        } else {
            console.error('E and D are the same ... regenerating ... ');
            window.location.reload(); 
        }

        return () => {};
    }, []); 

    const clickShowFormulas = () => {
        setShowFormulas(prev => !prev);
    };

    return (
        <div className='autoGenKeys'>
            <div className='formulasTable' style={{ display: showFormulas ? 'inline-block' : 'none' }}>
                <table>
                    <tbody>
                        <tr>
                            <td align='center'> 
                                Prime Array = [{primeArray.join(', ')}]
                            </td>                    
                        </tr>
                        <tr>
                            <td align='center'> 
                                Prime1 = {p1} 
                            </td>                    
                        </tr>
                        <tr>
                            <td align='center'> 
                                Prime2 = {p2}
                            </td>                    
                        </tr>
                        <tr>
                            <td align='center'> 
                                N = {N}
                            </td>                    
                        </tr>
                        <tr>
                            <td align='center'> 
                                &#x3D5; = {phiN}
                            </td>                    
                        </tr>
                        <tr>
                            <td align='center'> 
                                E = {E}
                            </td>                    
                        </tr>
                        <tr>
                            <td align='center'> 
                                D = {D}
                            </td>                    
                        </tr>
                    </tbody>
                </table>
            </div>

            {E && N && D && (
                <Encryption E={E} N={N} D={D} encryptedNum={undefined} inputNumProp={-1} />
            )}
        </div>
    );
};

export default AutoGenKeys; 
