export const genPrimeArr = ():number[] => {

    let primeArr:number[] = []; 
    // some max prime number firstN, can also be higher
    // will run into time propblems if too high 
    let firstN:number = 149; 
    let primeCheck:boolean;

    for (let n = firstN; n >= 2; n--) {
        primeCheck = true; 
        // only check if number is divisible by numbers up to 1/2 of its size
        for(let i=2; i<firstN/2; i++) { 
            // if any number from [2, number/2] divides n, then n is NOT prime 
            if(n !== i) { // avoid number%number, which is always going to be 0; also always avoid number%1
                if((n % i) === 0){
                    primeCheck = false;
                    console.log('not a prime number: ', n, ' % ', i, ' = ', n%i); 
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
}

