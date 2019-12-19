import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import {HomeLoginNav} from '../HomeLoginNav/HomeLoginNav'

const HeaderLogReg = () => {
    return (
        <div className="HomeContainer">
            <div className="LogReg_container">   
            <div className="RightSubContainer">
            <div className="HomeHeader">
             <HomeLoginNav/>
            <nav className="mainNav">
                <ul className="navigation mainUl" >
                    <li><Link activeClass="active" to="/">Start</Link></li>
                    <li><Link activeClass="active" to="/#FourSteps">O co chodzi?</Link></li>
                    <li><Link activeClass="active" to="/#about">O nas</Link></li>
                    <li><Link activeClass="active" to="/#Help">Fundacja i oraganizacje</Link></li>
                    <li><Link activeClass="active" to="/#Contact">Kontakt</Link></li>
                </ul>
            </nav>
        </div>
        </div>
        </div>
        </div>
       
    )
    
}

export {HeaderLogReg}