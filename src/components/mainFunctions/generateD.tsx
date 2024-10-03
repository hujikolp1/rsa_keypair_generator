export const extendedEuclidean = (a: number, b: number): [number, number, number] => {
    if (b === 0) {
        return [a, 1, 0];
    }
    const [gcd, x1, y1] = extendedEuclidean(b, a % b);
    const x = y1;
    const y = x1 - Math.floor(a / b) * y1;
    return [gcd, x, y];
};

export const generateD = (phiN: number, E: number): number => {
    const [gcd, x, _] = extendedEuclidean(E, phiN);
    
    // Ensure E and phiN are coprime
    if (gcd !== 1) {
        console.error("E and phiN are not coprime, failed to generate D");
        window.location.reload();  // Restart process
        return -1;
    }

    let D = x % phiN;
    if (D < 0) {
        D += phiN;  // Ensure D is positive
    }

    return D;
};



// export const generateD = (phiN: number, E: number): number => {
//     // d*e = 1 mod N 
//     let D: number = 1; 

//     while( ((D * Number(E)) % phiN !== 1) && D<10000 ) {
//         if((D*Number(E)) % phiN === 1 ){
//             break
//         }
//         D++;

//         if(D===10000) {
//             let errorD: string = ('Computation > 10000. Try Again.');
//             D=-1; 
//             console.error('ERROR in generateD functional component: ', errorD)
//             window.location.reload(); 
//             break; 
//         }
//     }
//     return D; 
// };