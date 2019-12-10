import React from 'react'
import {NavLink} from 'react-router-dom'
import {Link} from 'react-scroll'


const HomeHeader = () => {
    return (
        <div className="HomeHeader">
            <nav className="loginNav">
                <ul className="navigation loginUl">
                    <NavLink to='/logowanie'><li>Zaloguj</li></NavLink>
                    <NavLink to ='rejestracja'><li>Załóż konto</li></NavLink>
                </ul>
            </nav>
            <nav className="mainNav">
                <ul className="navigation mainUl" >
                    <Link activeClass="active"
                        to="target"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        isDynamic={true}
                     ><li>Start</li></Link>
                      <Link activeClass="active"
                        to="target"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        isDynamic={true}>
                    <li>O co chodzi?</li>   
                        </Link>   
                        <Link activeClass="active"
                        to="target"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        isDynamic={true}>
                    <li>O nas</li>        
                        </Link>
                        <Link activeClass="active"
                        to="target"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={50}
                        duration={500}
                        isDynamic={true}>
                    
                    <li>Fundacja i oraganizacje</li>
                    </Link>
                    <Link activeClass="active"
                        to="target"
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