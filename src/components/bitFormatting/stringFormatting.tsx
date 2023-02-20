    //--------------------------------------------------------------------------------
    // ------------------  handleStringEncryption 
    //--------------------------------------------------------------------------------

    // string => binary or hex representation
    // binary => original string 

    // const handleStringEncryption = (e: { preventDefault: () => void; }) => {
    //     e.preventDefault(); 
    //     // make message into array of chars 
    //     let charArray:string[] = message.split('')
    //     let intArray:number[] = []; 
    //     // make array of chars into array of character codes 
    //     // also maintain order, either push or shift 
    //     for(let i = 0; i < charArray.length; i++) {
    //         let index = charArray[i].charCodeAt(0);
    //         intArray.push(index); 
    //     }
    //     setCharCodeArray(intArray); 

    //     console.log('INT ARRAY: ', intArray); 
    //     console.log('Char Code Array: ', charCodeArray)

    //     // encrypt character codes with public key E
    //     let encryptedIntArray:number[] = []; 
    //     for (let i = 0; i < intArray.length; i++) {
    //         let index = ((intArray[i] ** props.E) % props.N);
    //         encryptedIntArray.push(index); 
    //     }
    //     console.log("!!!!! ", encryptedIntArray)

    // }
    //--------------------------------------------------------------------------------