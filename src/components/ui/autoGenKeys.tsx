import React from '../../../pkgs/react';
import { useState, useEffect } from '../../../pkgs/react';

import { genPrimeArr } from '../mainFunctions/genPrimeArr.tsx';
import { genRandomPrimes } from '../mainFunctions/genRandomPrimes.tsx'; 
import { generateE } from '../mainFunctions/generateE.tsx'; 
import { generateD } from '../mainFunctions/generateD.tsx'; 

import Encryption from '../encoding/encryption.tsx'; 


const AutoGenKeys: React.FC = ({...props})  => {

    // ------------------------------------------------------------
    // FORMULA state variables
    const [primeArray, setPrimeArray] = useState<number[]>([]); 
    const [randomPrimes, setRandomPrimes] = useState<number[]>([]);
    const [p1, setP1] = useState<number>(-1);
    const [p2, setP2] = useState<number>(-1);
    const [N, setN] = useState<number>(-1); 
    const [phiN, setPhiN] = useState<number>(-1); 
    const [E, setE] = useState<number>(-1); 
    const [D, setD] = useState<number>(-1); 
    // ------------------------------------------------------------

    const [showFormulas, setShowFormulas] = useState<string>('none');

    // ------------------------------------------------------------

 
    useEffect( () => {

        const generatedPrimeArray:number[] = genPrimeArr(); 
        setPrimeArray(generatedPrimeArray); 

        const generatedRandomPrimes:number[] = genRandomPrimes(generatedPrimeArray); 
        setRandomPrimes(generatedRandomPrimes); 
        setP1(generatedRandomPrimes[0]);
        setP2(generatedRandomPrimes[1]); 
        setN(generatedRandomPrimes[0] * generatedRandomPrimes[1]);
        setPhiN( (generatedRandomPrimes[0] - 1) * (generatedRandomPrimes[1] - 1) );

        const generatedE:number = generateE(
            generatedRandomPrimes[0] * generatedRandomPrimes[1], 
            ( (generatedRandomPrimes[0] - 1) * (generatedRandomPrimes[1] - 1) )
        ); 
        setE(generatedE); 

        let generatedD:number = generateD(
            ( (generatedRandomPrimes[0] - 1) * (generatedRandomPrimes[1] - 1) ),
            generatedE
        ); 
        if(generatedD != generatedE) {
            // console.log('GENERATED D ', generatedD);
            setD(generatedD);
        }
        else {
            // console.error('E and D are the same ... regenerating ... ');
            let errorGenerating:number = -1;
            setD(errorGenerating); 
            window.location.reload(); 
        }
        
        return () => {};

    }, []); /* --- end useEffect() --- */ 

    const clickShowFormulas = () => {
        if(showFormulas === 'none') {
            setShowFormulas('inline-block');
        }
        else {
            setShowFormulas('none');
        }
    };

    return (
        <div className='autoGenKeys'>
            {/* Commenting out the math formulas for now, may include later as table or graph */}
            {/* <button
                style={{color: 'black'}}
                type='button' 
                onClick={ clickShowFormulas }
            >
                Show/Hide Formulas 
            </button> */}

            <div className='formulasTable' style={ {display: `${showFormulas}`} }>
                <table>
                    <tbody>
                        <tr>
                            <td align='center'> 
                                Prime Array = [{primeArray.map((i: number) => {
                                    return i+', ';
                                })}]
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

            <Encryption E={E} N={N} D={D} encryptedNum={undefined} inputNumProp={-1} />

        </div>
        
    )
        
}


export default AutoGenKeys; 

