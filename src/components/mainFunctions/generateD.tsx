export const generateD = (phiN: number, E: number): number => {
    // d*e = 1 mod N 
    let D: number = 1; 

    while( ((D * Number(E)) % phiN !== 1) && D<10000 ) {
        if((D*Number(E)) % phiN === 1 ){
            break
        }
        D++;

        if(D===10000) {
            let errorD: string = ('Computation > 10000. Try Again.');
            D=-1; 
            window.location.reload(); 
            break; 
            // failed to generate based on conditionals
            // must restart from top based on new inputs 
        }
    }
    return D; 
};