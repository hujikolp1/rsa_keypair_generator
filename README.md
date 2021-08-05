# RSA Public and Private Encryption Pair Generator 
## Keep trying to manually generate until you succeed 
## Very large calculations are halted so you may need to try several times
## Otherwise you can use the automatic generator
![Generator](public/crypto1.png)
## And your encryption pairs will be good to go
![Pairs](public/crypto2.png)
## Now what do you do with these key pairs?
## They can be used to encrypt and decrypt data as follows: 
Say you have an unencrypted message as an integer number, say 4. <br>
Raise this number to the key E, say 5. So you get 1,024. This is your encrypted number. <br>
This can be decrypted by raising the encryoted number to D, say 11, and taking its modulus N. <br>
1,024 to the 11th power is 1.298074214634 e 33, and modulud 14 this is 4. <br>
In short: <br>
M^E = C mod(N) and C^D = M mod(N) <br>
Where M is the original message and C is the encrypted message, E is the public key and D is the private key. <br>
Try this modulus calculator online to test your encryption pairs: <a> https://www.mtholyoke.edu/courses/quenell/s2003/ma139/js/powermod.html </a> 

This application uses Node Package Manager. In the project directory command line you can run: <br> 

### `npm i` <br>
And <br>
### `npm start` <br>
And make a static build with <br>
### `npm build` <br>
Or access all configuration files with <br>
### `npm eject` <br> 

Notes: 
- The tsconfig.json file property "noImplicitAny" is false




