import React, { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';
import { genPrimeArr } from './mainFunctions/genPrimeArr';
import { genRandomPrimes } from './mainFunctions/genRandomPrimes'; 
import { generateE } from './mainFunctions/generateE'; 
import { generateD } from './mainFunctions/generateD'; 
import { random } from 'mathjs';


const AutoGenKeys:React.FC = ({...props})  => {

    const [primeArray, setPrimeArray] = useState<number[]>([]); 
    const [randomPrimes, setRandomPrimes] = useState<number[]>([]);
    const [p1, setP1] = useState<number>(-1);
    const [p2, setP2] = useState<number>(-1);
    const [N, setN] = useState<number>(-1); 
    const [phiN, setPhiN] = useState<number>(-1); 
    const [E, setE] = useState<number>(0); 
    const [D, setD] = useState<number>(0); 
 
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

        const generatedD:number = generateD(
            ( (generatedRandomPrimes[0] - 1) * (generatedRandomPrimes[1] - 1) ),
            generatedE
        )
        console.log('GENERATED D ', generatedD);
        setD(generatedD);

        
        return () => {}

    }, []);

    return (
        <div>
            <br></br>
            <span> Prime Array = [{primeArray.map(i => {return i+', ';})}] </span>

            <br></br>
            <span> Prime1 = {p1} </span>
             
            <br></br>
            <span> Prime2 = {p2} </span>

            <br></br>
            <span> N = {N} </span>

            <br></br>
            <span> &#x3D5; = {phiN} </span>

            <br></br>
            <span> E = {E} </span>

            <br></br>
            <span> D = {D} </span>

        </div>
        
    )
        
}

export default AutoGenKeys; 

