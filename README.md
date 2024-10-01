# Live Mode Here: https://rsakeygenerator-b7a79.web.app/

# RSA Public and Private Encryption Key Pair Generator
This TypsScript program will automatically generate pairs for you based on primes less than 149.
Of course, you can increase this range of primes used but it will take up more computation time and energy. To change this range go to ```/src/components/mainFunctions``` and increase or decrease the prime numbers in the file ```genPrimeArr.tsx```. Once your encryption pairs are good to go you can use them for encryption and decryption. <br> 

## The RSA encryption and decryption algorithm works as follows: 
Say you have an unencrypted message as an integer number, say 4. <br>
Raise this number to the key E, say 5. So you get 1,024. This is your encrypted number. <br>
This can be decrypted by raising the encrypted number to D, say 11, and taking its modulus N. <br>
1,024 to the 11th power is 1.298074214634 e 33, and modulus 14 this is 4. <br>
In short: <br>
M^E = C mod(N) and C^D = M mod(N) <br>
Where M is the original message and C is the encrypted message, E is the public key and D is the private key. The encrypted message must be at least 2 less than the modulo N, or else it will break the algorithm. Likewise your encrypted message or integer cannot be equal to the larger prime or the larger prime + 1; otherwise your encrypted message will be your original message. <br>
Try this modulus calculator online to test your encryption pairs: <a> https://www.mtholyoke.edu/courses/quenell/s2003/ma139/js/powermod.html </a> or the nifty algorithmic calculator <a>https://www.emathcalculator.com/en/calculators/algebra/powerMod.php</a> <br>

TypeScript was used in this application, as well as a compiler target for ES2020. This was needed to use the BigInt data type to perform these large computations. Regular integers in regular JavaScript were just not enough. <br> 


### Software Requirements 
* ES2020, for use of BigInt data types

### Installation and Running 
* All packages and source code is preinstalled and bundled using `esbuild` (https://github.com/evanw/esbuild)
* Open the `index.html` file in the `public` directory

### To Build From Source
* Requires a JavaScript bundler such as esbuild
* Run the command in the `BUILD` file
* You can use another bundler of your liking but will need to replace `esbuild` with your choice

```TS Notes: ```
- The tsconfig.json file property "noImplicitAny" is false
- The tsconfig.json compilerOptions "target" is ES2020