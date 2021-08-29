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

    console.log('STATE primeArray ', primeArray); 
    console.log('STATE randomPrimes ', randomPrimes);

    console.log('p1 ', p1);
    console.log('p2, ', p2); 

    console.log('N ', N); 
    console.log('phiN ', phiN); 



    // const primeArray:number[] = genPrimeArr(); 
    // console.log("primeArray ", primeArray);

    // const randomPrimes:number[] = genRandomPrimes(primeArray); 
    // console.log("randomPrimes ", randomPrimes); 

    // const p1:number = randomPrimes[0];
    // console.log("p1 ", p1);

    // const p2:number = randomPrimes[1]; 
    // console.log("p2 ", p2);

    // const N:number = p1 * p2; 
    // console.log("N ", N);

    // const phiN:number = (p1 - 1) * (p2 - 1); 
    // console.log("phiN ", phiN); 

    // // get E
    // const E:number = generateE(N, phiN); 
    // console.log("EEEEEEEEEEEE ", E); 

    // get D
    // const D:number = generateD(N, E); 
    // final pairs 



    return (
        <div>

            {primeArray.map(i => {
                return i+', '; 
            })}

            <br></br>
            P1 = {p1} 

            <br></br>
            P2 = {p2}

            <br></br>
            N = {N}

            <br></br>
            &#x3D5; = {phiN}

            <br></br>
            E = {E}

            <br></br>
            D = {D}

        </div>
        
    )
        
}

export default AutoGenKeys; 

