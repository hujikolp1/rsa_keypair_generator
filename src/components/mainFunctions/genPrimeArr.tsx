export const genPrimeArr = (): number[] => {

    let primeArr: number[] = []; 
    // some max prime number firstN, can also be higher but will need more computational power 
    // will run into problems if too large 
    let firstN:number = 149; 
    let primeCheck:boolean;

    // make 11 the smallest prime 
    for (let n = firstN; n >= 11; n--) {
        primeCheck = true; 
        // only check if number is divisible by numbers up to 1/2 of its size
        for(let i=2; i<firstN/2; i++) { 
            // if any number from [2, number/2] divides n, then n is NOT prime 
            if(n !== i) { // avoid number%number, which is always going to be 0; also always avoid number%1 when checking for primes 
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
    // primeArr will contain 2 as a prime, as well as 3,5,7, etc.
    // consider popping these off the array because they are too low
    return primeArr;           
};
