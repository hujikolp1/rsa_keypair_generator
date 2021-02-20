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

        return () => {}
    }, [primeArr, randoPrime1, randoPrime2, e])

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue(e.target.parentNode[0].value)
        console.log('inputValue e -> ', e.target.parentNode[0].value)
    }

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

    }

    const gcd = (a, b) => {
        if (!b) {
            return a;
        }
        return gcd(b, a % b);
    }

    const generateE = () => {
        // e is gt 1 and lt Phi(N)
        // e is coprime with N and Phi(N)
        if(primeArr.length>0){

        

            let N = primeArr[randoPrime1] * primeArr[randoPrime2]
            console.log('N -> ', N)
            let phiN = (primeArr[randoPrime1] - 1) * (primeArr[randoPrime2] - 1)
            console.log('phiN -> ', phiN)
            
            let firstReqE = Math.floor(Math.random()*(phiN-2)+2)
            console.log("  e before-> ", firstReqE)

            while(gcd(firstReqE,N)!==1){
                firstReqE--
            }
            while(gcd(firstReqE,phiN)!==1){
                firstReqE--
            }
            console.log("  after-> ", firstReqE)
        }



    }
    generateE()

    // let tester = Math.floor(Math.random()*((270*196)-2)+2)
    // console.log('===== ', tester)
    // while(gcd(tester,(271*197))!==1){
    //     tester--
    // }
    // while(gcd(tester,(270*196))!==1){
    //     tester--
    // }
    // console.log('after ===== ', tester)
    
    
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