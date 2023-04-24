import {gcd} from './gcd.tsx'; 

export const generateE = (N: number, phiN: number): number => {
        let findE: number; 
        findE = Math.floor(Math.random()*(phiN-2)+2);
        while(gcd(findE,N)!==1 || gcd(findE,phiN)!==1){
            findE--;
        }

    return findE; 
};
