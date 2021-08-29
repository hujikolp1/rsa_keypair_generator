import React, { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';
import { genPrimeArr } from './mainFunctions/genPrimeArr';
import { genRandomPrimes } from './mainFunctions/genRandomPrimes'; 
import { generateE } from './mainFunctions/generateE'; 
import { generateD } from './mainFunctions/generateD'; 


const AutoGenKeys:React.FC = ({...props})  => {

    const [primeArray, setPrimeArray] = useState<number[]>([]); 
    const [randomPrimes, setRandomPrimes] = useState<number[]>([]); 
 
    useEffect(() => {
        const generatedPrimeArray = genPrimeArr(); 
        setPrimeArray(generatedPrimeArray); 

        return () => {}

    }, [])


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
            
            {/* P1 = {p1 && p1} 

            <br></br>
            P2 = {p2}

            <br></br>
            N = {N}

            <br></br>
            &#x3D5; = {phiN}

            <br></br>
            E = 

            <br></br>
            D =  */}

        </div>
        
    )
        
}

export default AutoGenKeys; 

