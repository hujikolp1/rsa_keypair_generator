import React from '../../../pkgs/react'

import './dashboard.css';

const DashBoard = ({ onRegenerateKeys }) => {
    return (
        <div className='dashboard'>
            <div className='navTitle'>
                <nav id="navbar" className="nav">
                    <button onClick={onRegenerateKeys}>REGENERATE KEYS</button>
                </nav>
            </div>
        </div>
    );
};


export default DashBoard; 
