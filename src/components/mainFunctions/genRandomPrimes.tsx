export const genRandomPrimes = () => {
    let random1 = Math.floor(Math.random()*(primeArr.length)) 
    // setRandoPrime1(random1)
    let random2 = Math.floor(Math.random()*(primeArr.length)) 
    // setRandoPrime2(random2)

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