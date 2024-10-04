export const genPrimeArr = (): number[] => {
    let primeArr: number[] = []; 
    let firstN: number = 149; 

    // Make 11 the smallest prime 
    for (let n = 11; n <= firstN; n++) {
        let primeCheck: boolean = true; 
        for (let i = 2; i <= Math.sqrt(n); i++) { 
            if ((n % i) === 0) {
                primeCheck = false;
                break; 
            }
        }
        // Otherwise n is prime, so push into array 
        if (primeCheck) {
            primeArr.push(n);
        }
    }
    return primeArr;           
};
