import React from '../../../pkgs/react';
import { useState, useEffect } from '../../../pkgs/react';

import { genPrimeArr } from '../mainFunctions/genPrimeArr.tsx';
import { genRandomPrimes } from '../mainFunctions/genRandomPrimes.tsx'; 
import { generateE } from '../mainFunctions/generateE.tsx'; 
import { generateD } from '../mainFunctions/generateD.tsx'; 

import Encryption from '../encoding/encryption.tsx'; 

import './autoGenKeys.css';


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
            <button className='show-formulas-btn' onClick={clickShowFormulas}>Show Formula</button>

            <div className='formulasTable' style={{ display: showFormulas ? 'inline-block' : 'none' }}>
                <section className='formulas-grid-layout'>
                    <div className='keys-column'>
                        <div className='grid-item'><dt>Prime1:</dt></div>
                        <div className='grid-item'><dt>Prime2:</dt></div>
                        <div className='grid-item'><dt>N:</dt></div>
                        <div className='grid-item'><dt>&#x3D5; (PhiN):</dt></div>
                        <div className='grid-item'><dt>E:</dt></div>
                        <div className='grid-item'><dt>D:</dt></div>
                    </div>
                    <div className='values-column'>
                        <div className='grid-item'><dd>{p1}</dd></div>
                        <div className='grid-item'><dd>{p2}</dd></div>
                        <div className='grid-item'><dd>{N}</dd></div>
                        <div className='grid-item'><dd>{phiN}</dd></div>
                        <div className='grid-item'><dd>{E}</dd></div>
                        <div className='grid-item'><dd>{D}</dd></div>
                    </div>
                </section>
            </div>

            <div>
                {E && N && D && (
                    <Encryption E={E} N={N} D={D} encryptedNum={undefined} inputNumProp={-1} />
                )}                
            </div>
        </div>
    );
};

export default AutoGenKeys; 
