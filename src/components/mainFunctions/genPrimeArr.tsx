export const genPrimeArr = () => {
    // some max prime number firstN, can also be higher
    // will run into time propblems if too high 
    let firstN = 149
    for (let n = firstN; n >= 2; n--) {
        let checker = true
        for(let i=2;i<firstN/2;i++){
            if((n % i) == 0){
                checker = false
                break // not a prime num 
            }
        }
        if(checker === true){
            primeArr.push(n)
        }
    }
    return primeArr          
}

