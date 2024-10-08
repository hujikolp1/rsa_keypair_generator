# RSA Public and Private Encryption Key Pair Generator
This TypeScript program will automatically generate pairs for you based the upper bounds prime integer you input, otherwise the upper bound prime will be set to a default of 149, which is computationally inexpensive and should work for most modern browsers in a short amount of time.
Of course, you can increase the upper bound prime used, and your keypairs will be more secure, but it will take up more computation time and energy. Once your encryption pairs are good to go you can use them for encryption and decryption of integers. <br> 

# Roadmap (October 2024 update)
* Expand encryption and decryption capabilities for use with string data types. Achieve this by chunking.
* Explore other data types to encrypt and decrypt (images, binary files, etc.).
* Export the RSA functional code into an ES module for use outside of the browser.
* Achieve the same cryptographic ability as widely used RSA libraries, provide open-sourced education and transparency, and meet standards and protocols (RSA-OAEP: Optimal Asymmetric Encryption Padding). 

## The RSA encryption and decryption algorithm works as follows: 
You have an plaintext integer, say 4. <br>
Raise this number to the power of key E, say 5. So you get 1,024. This is your encrypted number. <br>
This can be decrypted by raising the encrypted number to D, say 11, and taking its modulus N. <br>
1,024 to the 11th power is 1.298074214634 e 33, and modulus 14 this is 4. <br>
In short: <br>
M^E = C mod(N) and C^D = M mod(N) <br>
Where M is the original message and C is the encrypted message, E is the public key and D is the private key. The encrypted message must be at least 1 less than the modulo N. Integers larger than N will not work. Likewise your encrypted integer cannot be equal to the larger prime or the larger prime + 1; otherwise your encrypted message will be your original message. <br>
Try this modulus calculator online to test your encryption pairs: <a> https://www.mtholyoke.edu/courses/quenell/s2003/ma139/js/powermod.html </a> or the algorithmic calculator <a>https://www.emathcalculator.com/en/calculators/algebra/powerMod.php</a> <br>

### Software Requirements 
* ES Build (or other similar bundler)
* ES 2020 (for use of BigInt data types)
* Note: Node.js is not required, instead React and other packages are included as minified files in the `pkgs` directory

### Installation and Running 
* All packages and source code is preinstalled and bundled using `esbuild` (https://github.com/evanw/esbuild)
* Open the `index.html` file in the `public` directory

### To Build From Source
* Requires a JavaScript bundler (I am using `esbuild` version: 0.18.3)
* Run the command in the `BUILD` file from the project's root directory:
`sh BUILD.sh`
* Now open the `index.html` file with the new code bundles
* Simple! No Node.js packages or dependencies required

### TypeScript Config Notes
- The tsconfig.json file property "noImplicitAny" is false
- The tsconfig.json compilerOptions "target" is ES2020

# Live Mode Here: https://rsakeygenerator-b7a79.web.app/
