import React, {useState, useEffect} from 'react'

const PrimeGen = (...props) => {

    const [primeArr, setPrimeArr] = useState([])
    const [inputValue, setInputValue] = useState(null)
    const [randoPrime1, setRandoPrime1] = useState(null)
    const [randoPrime2, setRandoPrime2] = useState(null)
    const [e, setE] = useState(null)


    useEffect(() => {
        let primes = genPrimeArr()
        setPrimeArr(primes)

        let genE = generateE()
        console.log('------ ', genE)
        setE(genE)

        return () => {}
    }, [primeArr, randoPrime1, randoPrime2])

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue(e.target.parentNode[0].value)
        console.log('inputValue e -> ', e.target.parentNode[0].value)
    }

    //-------------------------------------
    const genPrimeArr = () => {
        let firstN = 297

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
        console.log('index 1 -> ', randoPrime1)
        console.log('index 2 -> ', randoPrime2)

        // let genE = generateE()
        // console.log('------ ', genE)
        // setE(genE)

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
    }



    
    
    return(
        <div>
           <h1>Prime Generator</h1><br></br> 

           {/* <form>
                <input></input>
                <button type='submit' onClick={(e)=>handleSubmit(e)}>Message</button>
           </form> <br></br> */}

           <button onClick={()=>genRandomPrimes()}>Get Random Primes</button> <br></br><br></br>
           Prime 1: {primeArr[randoPrime1]} <br></br>
           Prime 2: {primeArr[randoPrime2]} <br></br>
           N: { primeArr[randoPrime1] * primeArr[randoPrime2] } <br></br>
           Phi(N): { (primeArr[randoPrime1] - 1) * (primeArr[randoPrime2] - 1) } <br></br>
           e: {e} <br></br>
           d: {} <br></br>
           {/* Other Primes: {primeArr.map( (i)=>{
               return <span>{i}</span>
           })} <br></br> */}


        </div>
    )
}

export default PrimeGen