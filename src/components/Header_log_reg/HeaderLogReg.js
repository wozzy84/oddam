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
                    <Link activeClass="active" to="/"><li>Start</li></Link>
                    <Link activeClass="active" to="/#FourSteps"><li>O co chodzi?</li></Link>   
                    <Link activeClass="active" to="/#about"><li>O nas</li></Link>
                    <Link activeClass="active" to="/#Help"><li>Fundacja i oraganizacje</li></Link>
                    <Link activeClass="active" to="/#Contact"><li>Kontakt</li></Link>
                </ul>
            </nav>
        </div>
        </div>
        </div>
        </div>
       
    )
    
}

export {HeaderLogReg}