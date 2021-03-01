import React, {useState, useEffect} from 'react'


const PrimeGen = (..._props: any[]) => {

    const [primeArr, setPrimeArr] = useState<Array<number>>([])
    const [randoPrime1, setRandoPrime1] = useState<number>(1)
    const [randoPrime2, setRandoPrime2] = useState<number>(1)
    const [e, setE] = useState<number>(1)
    const [d, setD] = useState<number|string>(1)
    const [N, setN] = useState<number>(primeArr[randoPrime1] * primeArr[randoPrime2])

    const [genPrimesDisplay, setGenPrimesDisplay]=useState(true)
    const [genEDisplay, setGenEDisplay]=useState('none')
    const [genDDisplay, setGenDDisplay]=useState('none')
    const [displayOK, setDisplayOK]=useState('none')
    const [successD, setSuccessD]=useState('none')
    const [mainGenerator, setMainGenerator]=useState('inline-block')
    const [finalCryptoPairs,setFinalCryptoPairs]=useState<FinalCryptoPairs>({
        N:0,e:0,d:0
    })

    const [test,setTest] = useState(null)
    const [inputValue, setInputValue] = useState(null)

    interface FinalCryptoPairs {
        N: Number; 
        e: Number;
        d: Number|string; 
    }


    // type StringRecord = {
    //     [index: string]: number;
    // };
      
    // interface IStringRecord {
    //     [index: string]: number;
    // }


    useEffect(() => {
        let primes = genPrimeArr()
        setPrimeArr(primes)

        return () => {}

    }, [primeArr, randoPrime1, randoPrime2, displayOK])

    const handleSubmit = (e: { preventDefault: () => void; target: { parentNode: { value: any }[] } }) => {
        e.preventDefault()
        setInputValue(e.target.parentNode[0].value)
        console.log('inputValue e -> ', e.target.parentNode[0].value)
    }
    const handleOK = () => {
        setDisplayOK('none')
        setPrimeArr([]);
        setE(0)
        setD(0)
    }

    const handleTest = () => {
        // let a = math.evaluate('3+4')
        // setTest(a)
    }

    //-------------------------------------
    const genPrimeArr = () => {
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
        if(e!==undefined) setE(0)
        if(d!==undefined) setD(0)
        if(!d && e!==undefined) setGenDDisplay('none')
        if(d!==undefined && e!==undefined) setGenDDisplay('none')
        if(displayOK==='inline-block') setDisplayOK('none')
        
        setGenEDisplay('inline-block');
    }
    //-------------------------------------
    const genE = () => {
        let genE = generateE()
        setE(genE)
    }
    const genD = () => {
        let genD = generateD()
        setD(genD) 
    }
    //-------------------------------------
    const gcd = (a:number, b:number):number => {
        if (!b) {
            return a;
        }
        let aModB:number = a % b; 
        // return gcd (b, a%b)
        return gcd ( b, aModB );
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
            setGenDDisplay('inline-block')
            return findE
        } else {
            return 0
        }
    }
    //-------------------------------------
    const generateD = () => {
        // d*e = 1 mod N 
        let dd:number|string=1; 
        if(e !== null){
            let phiN = (primeArr[randoPrime1] - 1) * (primeArr[randoPrime2] - 1)
            while( ((dd*e) % phiN !== 1) && dd<10000 ){
                console.log('d -> ', (dd*e) % phiN)
                if((dd*e) % phiN === 1 ){
                    console.log("FOUND ONE D ",dd)
                    break
                }
                dd++
            }
            if(dd===10000){
                dd = ('Computation is larger than 10000. Try Again.')
                // setD('Computation is larger than 10000. Try Again.')
                setGenEDisplay('none');
                setGenDDisplay('none');
                setDisplayOK('inline-block')
            }
            // otherwise success
            // open up input box
            // take input and output the encrypted
            // open up decrypt box
            // take input and output the decrypted original (if success)
            if(dd<10000)setSuccessD('inline-block'); 
            setFinalCryptoPairs({N, e, d:dd})
            if(dd<10000)setMainGenerator('none')
            return dd
        } else {
            return 0 
        }
    }
    //-------------------------------------
    var styles = {
        
    }



    
    
    return(
        <div>
            <h1 style={{color:'white'}}>Crypto Generator</h1><br></br> 

            <div style={{display:`${mainGenerator}`}}>
                <button className="hover_buttons" onClick={()=>genRandomPrimes()}><strong>Get Random Primes</strong></button> <br></br><br></br>
                <div className='get_random_primes'>
                    <div>Prime 1: {primeArr[randoPrime1]} <br></br> </div>

                    Prime 2: {primeArr[randoPrime2]} <br></br>
                    N: { primeArr[randoPrime1] * primeArr[randoPrime2] } <br></br>
                    &#x3D5;(N): { (primeArr[randoPrime1] - 1) * (primeArr[randoPrime2] - 1) } <br></br><br></br>
                </div>
                <div className='get_e'>
                    <button className="hover_buttons" onClick={()=>genE()} style={{display:`${genEDisplay}`}}><strong>Get E</strong></button> <br></br>
                    e: {e} <br></br><br></br>               
                </div>

                <div className='get_d'>
                    <button className="hover_buttons" onClick={()=>genD()} style={{display:`${genDDisplay}`}}><strong>Get D</strong></button> <br></br>
                    d: {d} <br></br>               
                </div>

                <button onClick={()=>handleOK()} style={{display:`${displayOK}`}}>OK</button>
                <br></br>

            </div>

            <div style={{display:`${successD}`}}>
                <table className='get_random_primes'>
                    <th>
                        N
                    </th>
                    <tr>
                        <td>{primeArr[randoPrime1] * primeArr[randoPrime2]}</td>
                    </tr>

                </table> <br></br>
                    
                <table className='get_random_primes'>

                    <th>
                        Keys
                    </th>
                    <tr>
                        <td>{e}</td>
                    </tr>
                    <tr>
                        <td>{d}</td>
                    </tr>
                </table> <br></br>

                    
                    {/* <form>
                        <input></input>
                        <button type='submit' onClick={(e)=>handleSubmit(e)}>Message</button>
                    </form> <br></br> */}



            </div>
           


           {/* <button onClick={()=>handleTest()}>test</button> <br></br>
           test: {test} */}

           {/* Other Primes: {primeArr.map( (i)=>{
               return <span>{i}</span>
           })} <br></br> */}


        </div>
    )
}

export default PrimeGen