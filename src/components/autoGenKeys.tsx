import React from 'react';
import {gcd} from './mainFunctions/gcd';
import {genPrimeArr} from './mainFunctions/genPrimeArr';
import {genRandomPrimes} from './mainFunctions/genRandomPrimes'; 

const AutoGenKeys = ():JSX.Element  => {
    // get random primes 
    let primeArray:number[] = genPrimeArr(); 
    let randomPrimes:number[] = genRandomPrimes(primeArray); 
    // get E

    // get D

    // final pairs 

    return (
        <div>
            {primeArray.map(i => {
                return i+', '; 
            })}
            <br></br>
            {randomPrimes[0] + ' ,' + randomPrimes[1]}
        </div>
        
    )
        
}

export default AutoGenKeys; 

