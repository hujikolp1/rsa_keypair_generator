import {gcd} from './gcd'; 

export const generateE = (N:number, phiN:number):number => {
    // e is gt 1 and lt Phi(N)
    // definition of Phi(N): phiN = (primeArr[randoPrime1] - 1) * (primeArr[randoPrime2] - 1)
    // e is coprime with N and Phi(N)
    let findE:number; 
    console.log('N -> ', N); 
    console.log('phiN -> ', phiN);
    
    findE = Math.floor(Math.random()*(phiN-2)+2);
    console.log("BEFORE findE-> ", findE);
    console.log("gcd(findE,N)!==1 ", gcd(findE,N)!==1);
    console.log("gcd(findE,phiN)!==1) ", gcd(findE,phiN)!==1)

    while(gcd(findE,N)!==1 || gcd(findE,phiN)!==1){
        findE--;
        console.log("lowering E: ", findE); 
    }
    console.log("AFTER gcd(findE,N)===1 ", gcd(findE,N)===1);
    console.log("AFTER gcd(findE,phiN)===1) ", gcd(findE,phiN)===1);
    console.log("AFTER findE: ", findE);

    return findE; 
}
