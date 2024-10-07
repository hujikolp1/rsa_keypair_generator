import React from '../../../pkgs/react'

import './dashboard.css';

const DashBoard = () => {

    return(
        <div className='dashboard'>
            <div className='navTitle'>
                <nav id="navbar" className="nav">                
                    <a href={window.location.href}>REGENERATE KEYS</a>            
                </nav>
            </div>
        </div>
    )
}

export default DashBoard; 
