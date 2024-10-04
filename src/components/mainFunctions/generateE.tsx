import {gcd} from './gcd.tsx'; 

export const generateE = (N: number, phiN: number): number => {
    let findE: number; 
    findE = Math.floor(Math.random() * (phiN - 2) + 2);

    while (gcd(findE, N) !== 1 || gcd(findE, phiN) !== 1) {
        if (findE <= 2) {  // Safeguard against going below 2
            throw new Error("No valid E found.");
        }
        findE--;
    }

    return findE; 
};
