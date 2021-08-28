export const generateE = () => {
    // e is gt 1 and lt Phi(N)
    // definition of Phi(N): phiN = (primeArr[randoPrime1] - 1) * (primeArr[randoPrime2] - 1)
    // e is coprime with N and Phi(N)
    let findE; 
    if(randoPrime1 || randoPrime2){
        let N = primeArr[randoPrime1] * primeArr[randoPrime2]
        console.log('N -> ', N)
        let phiN = (primeArr[randoPrime1] - 1) * (primeArr[randoPrime2] - 1)
        console.log('phiN -> ', phiN)
        
        findE = Math.floor(Math.random()*(phiN-2)+2)
        console.log("  e before-> ", findE)

        while(gcd(findE,N)!==1 && gcd(findE,phiN)!==1){
            findE--
        }
        console.log("  after-> ", findE)
        setGenDDisplay('inline-block')
        return findE
    } else {
        return 0
    }
}