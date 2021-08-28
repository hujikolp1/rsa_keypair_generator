export const generateD = () => {
    // d*e = 1 mod N 
    let dd:number|string=1; 
    if(e !== null){
        let phiN = (primeArr[randoPrime1] - 1) * (primeArr[randoPrime2] - 1)
        while( ((dd*Number(e)) % phiN !== 1) && dd<10000 ){
            console.log('d -> ', (dd*Number(e)) % phiN)
            if((dd*Number(e)) % phiN === 1 ){
                console.log("FOUND ONE D ",dd)
                break
            }
            dd++
        }
        if(dd===10000){
            dd = ('Computation > 10000. Try Again.')
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