import { gcd } from './gcd.tsx'; 

export const generateE = (N: number, phiN: number): number => {
    let findE: number; 
    findE = Math.floor(Math.random() * (phiN - 2) + 2);

    // Start looking for a valid E from the generated findE downwards
    while (findE > 2 && (gcd(findE, N) !== 1 || gcd(findE, phiN) !== 1)) {
        findE--;
    }

    // If we exit the loop and findE is less than or equal to 2, it means no valid E was found
    if (findE <= 2) {
        throw new Error("No valid E found.");
    }

    return findE; 
};
