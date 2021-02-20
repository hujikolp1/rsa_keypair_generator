import React, {useState, useEffect} from 'react'







const PrimeGen = (...props) => {

    const [primeArr, setPrimeArr] = useState([])
    const [inputValue, setInputValue] = useState(null)
    const [randoPrime1, setRandoPrime1] = useState(null)
    const [randoPrime2, setRandoPrime2] = useState(null)
    const [e, setE] = useState(null)
    const [d, setD] = useState(null)

    const [test,setTest] = useState(null)


    useEffect(() => {
        let primes = genPrimeArr()
        setPrimeArr(primes)

        return () => {}
    }, [primeArr, randoPrime1, randoPrime2])

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue(e.target.parentNode[0].value)
        console.log('inputValue e -> ', e.target.parentNode[0].value)
    }

    const handleTest = () => {
        // let a = math.evaluate('3+4')
        // setTest(a)
    }

    //-------------------------------------
    const genPrimeArr = () => {
        // some max prime number firstN, can also be higher
        // will run into time propblems if too high 
        let firstN = 97
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
    //-------------------------------------
    const genRandomPrimes = () => {
        let random1 = Math.floor(Math.random()*(primeArr.length)) 
        setRandoPrime1(random1)
        let random2 = Math.floor(Math.random()*(primeArr.length)) 
        setRandoPrime2(random2)

        if(random2==random1){
            while(random2==random1){
                random2 = Math.floor(Math.random()*(primeArr.length)) 
            }
            setRandoPrime2(random2)

        }
    }
    const genE = () => {
        let genE = generateE()
        setE(genE)
    }
    const genD = () => {
        let genD = generateD()
        setD(genD) 
    }
    //-------------------------------------
    const gcd = (a, b) => {
        if (!b) {
            return a;
        }
        return gcd(b, a % b);
    }
    //-------------------------------------
    const generateE = () => {
        // e is gt 1 and lt Phi(N)
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
            return findE
        } else {
            return null
        }
    }
    //-------------------------------------
    const generateD = () => {
        // d*e = 1 mod N 
        let d=1; 
        if(e !== null){
            let phiN = (primeArr[randoPrime1] - 1) * (primeArr[randoPrime2] - 1)
            while( ((d*e) % phiN !== 1) && d<10000 ){
                console.log('d -> ', (d*e) % phiN)
                if((d*e) % phiN === 1 ){
                    console.log("FOUND ONE D ",d)
                    break
                }
                d++
            }
            if(d===10000){
                d = 'try again'
            }
            return d
        } else {
            return null 
        }
    }



    
    
    return(
        <div>
           <h1>Crypto Message</h1><br></br> 

           {/* <form>
                <input></input>
                <button type='submit' onClick={(e)=>handleSubmit(e)}>Message</button>
           </form> <br></br> */}

           <button onClick={()=>genRandomPrimes()}>Get Random Primes</button> <br></br><br></br>
           Prime 1: {primeArr[randoPrime1]} <br></br>
           Prime 2: {primeArr[randoPrime2]} <br></br>
           N: { primeArr[randoPrime1] * primeArr[randoPrime2] } <br></br>
           Phi(N): { (primeArr[randoPrime1] - 1) * (primeArr[randoPrime2] - 1) } <br></br><br></br>
           <button onClick={()=>genE()}>Get E</button> <br></br>
           e: {e} <br></br><br></br>
           <button onClick={()=>genD()}>Get D</button> <br></br>
           d: {d} <br></br><br></br>
           <button onClick={()=>handleTest()}>test</button> <br></br>
           test: {test}
           {/* Other Primes: {primeArr.map( (i)=>{
               return <span>{i}</span>
           })} <br></br> */}


        </div>
    )
}

export default PrimeGen