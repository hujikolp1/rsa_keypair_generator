import React, { FunctionComponent } from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { genPrimeArr } from './mainFunctions/genPrimeArr';
import { genRandomPrimes } from './mainFunctions/genRandomPrimes'; 
import { generateE } from './mainFunctions/generateE'; 
import { generateD } from './mainFunctions/generateD'; 
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import Encryption from './encryption'; 
import { Button } from '@material-ui/core';


const AutoGenKeys:React.FC = ({...props})  => {

    // ------------------------------------------------------------
    // FORMULA state variables
    const [primeArray, setPrimeArray] = useState<number[]>([]); 
    const [randomPrimes, setRandomPrimes] = useState<number[]>([]);
    const [p1, setP1] = useState<number>(-1);
    const [p2, setP2] = useState<number>(-1);
    const [N, setN] = useState<number>(-1); 
    const [phiN, setPhiN] = useState<number>(-1); 
    const [E, setE] = useState<number>(-1); 
    const [D, setD] = useState<number>(-1); 
    // ------------------------------------------------------------

    const [showFormulas, setShowFormulas] = useState<string>('none');

    // ------------------------------------------------------------

 
    useEffect( () => {

        const generatedPrimeArray:number[] = genPrimeArr(); 
        setPrimeArray(generatedPrimeArray); 

        const generatedRandomPrimes:number[] = genRandomPrimes(generatedPrimeArray); 
        setRandomPrimes(generatedRandomPrimes); 
        setP1(generatedRandomPrimes[0]);
        setP2(generatedRandomPrimes[1]); 
        setN(generatedRandomPrimes[0] * generatedRandomPrimes[1]);
        setPhiN( (generatedRandomPrimes[0] - 1) * (generatedRandomPrimes[1] - 1) );

        const generatedE:number = generateE(
            generatedRandomPrimes[0] * generatedRandomPrimes[1], 
            ( (generatedRandomPrimes[0] - 1) * (generatedRandomPrimes[1] - 1) )
        ); 
        setE(generatedE); 

        let generatedD:number = generateD(
            ( (generatedRandomPrimes[0] - 1) * (generatedRandomPrimes[1] - 1) ),
            generatedE
        ); 
        if(generatedD != generatedE) {
            console.log('GENERATED D ', generatedD);
            setD(generatedD);
        }
        else {
            console.error('E and D are the same ... regenerating ... ');
            let errorGenerating:number = -1;
            setD(errorGenerating); 
            window.location.reload(); 
        }
        
        return () => {console.log('end useEffect()')}

    }, []); /* --- end useEffect() --- */ 

    const clickShowFormulas = () => {
        if(showFormulas === 'none') {
            setShowFormulas('inline-block');
        }
        else {
            setShowFormulas('none');
        }
    };

    return (
        <div>
            <Button
                variant='outlined'
                size='large'
                color='primary'
                type='button' 
                onClick={ clickShowFormulas }
            >
                Show/Hide Formulas 
            </Button> <br></br>

            <div className='formulasTable' style={ {display: `${showFormulas}`} }>
                <Table>

                    <br></br>
                    <TableRow>
                        <TableCell align='center'> 
                            Prime Array = [{primeArray.map(i => {
                                return i+', ';
                            })}]
                        </TableCell>                    
                    </TableRow>

                    <br></br>
                    <TableRow>
                        <TableCell align='center'> 
                            Prime1 = {p1} 
                        </TableCell>                    
                    </TableRow>

                    <br></br>
                    <TableRow>
                        <TableCell align='center'> 
                            Prime2 = {p2}
                        </TableCell>                    
                    </TableRow>

                    <br></br>
                    <TableRow>
                        <TableCell align='center'> 
                            N = {N}
                        </TableCell>                    
                    </TableRow>

                    <br></br>
                    <TableRow>
                        <TableCell align='center'> 
                            &#x3D5; = {phiN}
                        </TableCell>                    
                    </TableRow>

                    <br></br>
                    <TableRow>
                        <TableCell align='center'> 
                            E = {E}
                        </TableCell>                    
                    </TableRow>

                    <br></br>
                    <TableRow>
                        <TableCell align='center'> 
                            D = {D}
                        </TableCell>                    
                    </TableRow>

                </Table>

            </div>

            <Encryption E={E} N={N} D={D} encryptedNum={undefined}/>

        </div>
        
    )
        
}


export default AutoGenKeys; 

