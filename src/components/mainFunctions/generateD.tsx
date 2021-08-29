export const generateD = (phiN:number, E:number):number => {
    // d*e = 1 mod N 
    let D:number=1; 

    while( ((D*Number(E)) % phiN !== 1) && D<10000 ) {
        // console.log('d -> ', (D*Number(E)) % phiN)
        if((D*Number(E)) % phiN === 1 ){
            console.log("FOUND ONE D ", D)
            break
        }
        D++;

        if(D===10000) {
            let errorD:string = ('Computation > 10000. Try Again.');
            console.error(errorD); 
            D=-1; 
            // failed to generate based on conditionals
            // must restart from top based on new inputs 
        }
    }


    return D; 
}