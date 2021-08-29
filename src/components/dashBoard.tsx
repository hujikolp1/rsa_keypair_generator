import React from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Redirect } from "react-router-dom";


const DashBoard = () => {

    return(
        <div>
            <nav id="navbar" className="nav">                
                <a href="/">REGENERATE KEYS</a>            
            </nav>

            <h1 style={{color:'white'}}>RSA Keys Generator</h1><br></br> 

        </div>
    )
}

export default DashBoard; 