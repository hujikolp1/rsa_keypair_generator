export const genRandomPrimes = (primeArray:number[]):number[] => {
    let random1:number = Math.floor(Math.random()*(primeArray.length)) 
    let random2:number = Math.floor(Math.random()*(primeArray.length)) 
    // make sure they are unique, since a square number would not be RSA secure 
    if(random2==random1){
        while(random2==random1){
            random2 = Math.floor(Math.random()*(primeArray.length)) 
        }
    }

    return [primeArray[random1], primeArray[random2]]; 
}