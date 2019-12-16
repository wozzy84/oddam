import React from 'react'
import {Link} from 'react-scroll'
import {HomeLoginNav} from '../HomeLoginNav/HomeLoginNav'

const HomeHeader = () => {
    return (
        <div className="HomeHeader">
            <HomeLoginNav/>
            <nav className="mainNav">
                <ul className="navigation mainUl" >
                    <Link activeClass="active"
                        to="target"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={20}
                        duration={500}
                        isDynamic={true}
                     ><li>Start</li></Link>
                      <Link activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={20}
                        duration={500}
                        isDynamic={true}>
                    <li>O co chodzi?</li>   
                        </Link>   
                        <Link activeClass="active"
                        to="HomeAbout_sec"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={20}
                        duration={500}
                        isDynamic={true}>
                    <li>O nas</li>        
                        </Link>
                        <Link activeClass="active"
                        to="HomeHelpSec"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={20}
                        duration={500}
                        isDynamic={true}>
                    
                    <li>Fundacja i oraganizacje</li>
                    </Link>
                    <Link activeClass="active"
                        to="HomeContactSec"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        isDynamic={true}>
                         <li>Kontakt</li>   
                        </Link>
                    

                </ul>
            </nav>
        </div>
    )
}

export {HomeHeader}