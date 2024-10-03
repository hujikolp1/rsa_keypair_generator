export const genPrimeArr = (): number[] => {

    let primeArr: number[] = []; 
    let firstN:number = 149; 
    let primeCheck:boolean;

    // make 11 the smallest prime 
    for (let n = firstN; n >= 11; n--) {
        primeCheck = true; 
        for(let i = 2; i <= Math.sqrt(n); i++) { 
            if(n !== i) {
                if((n % i) === 0){
                    primeCheck = false;
                    break; 
                }    
            }
        }
        // otherwise n is prime, so push into array 
        if(primeCheck === true) {
            primeArr.push(n)
        }
    }
    return primeArr;           
};
