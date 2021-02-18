import React, {useState} from 'react'

const PrimeGen = (...props) => {
    const [p, setP] = useState(null)
    const [q, setQ] = useState(null)
    const [primeArr, setPrimeArr] = useState([])

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
        console.log("-> ", primeArr)
        return primeArr
                
    }
    let primes = genPrimeArr()
    return(
        <div>
           <h1>Prime Generator</h1><br></br> 
           P: {p} <br></br>
           Q: {q} <br></br>
           Primes: {primes.map( (i)=>{
               return <li>{i}</li>
           })}
        </div>
    )
}

export default PrimeGen