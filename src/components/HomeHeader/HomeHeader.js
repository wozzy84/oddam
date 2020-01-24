import React from 'react'
import {Link} from 'react-scroll'
import { HashLink as HashLink } from 'react-router-hash-link';
import {HomeLoginNav} from '../HomeLoginNav/HomeLoginNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faTimesCircle}  from '@fortawesome/free-solid-svg-icons'
import { HomeLoginNavMin } from '../HomeLoginNav/HomeLoginNavMin'
import {useState} from "react"
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


const HomeHeader = (props) => {
    const [activeMenu, setActiveMenu] = useState(false)
    const targetElement = document.querySelector('.home-container');
    const options = {
        reserveScrollBarGap: true
    }

    const handleClick = () => {
        setActiveMenu(true)
        document.body.style.backgroundColor = "grey";
        document.body.style.transition = "background-color 1s";
        disableBodyScroll(targetElement, options)
        
    }

    const handleCloseMenu = () => {
        setActiveMenu(false)
        document.body.style.backgroundColor = "white"
        clearAllBodyScrollLocks()
    }
    
    if (props.currentLocation==="/"){
        return (
            <div className="home-header">
                <div className="hamburger-menu">
                    <span className="hamburger-menu__icon"></span>
                    <div className="hamburger-menu__hamburger-field" onClick={handleClick} style={activeMenu? {opacity: "0", transition: "opacity 0.3s" }: null}>
                        <span className="hamburger-menu__span"></span>
                        <span className="hamburger-menu__span"></span>
                        <span className="hamburger-menu__span"></span>
                    </div>
                </div>
                <HomeLoginNav/>
                <nav className="main-nav">
                    <ul className="main-nav__list" style={activeMenu? {right:'0px'}: null} >
                    <FontAwesomeIcon icon={faTimesCircle} className="times-circle" onClick={handleCloseMenu}/>
                        <HomeLoginNavMin/>
                        <li className="main-nav__list-element">
                            <Link className="main-nav__link"
                               to="target"
                               spy={true}
                               smooth={true}
                               hashSpy={true}
                               offset={20}
                               duration={500}
                               isDynamic={true}
                            >Start
                            </Link>
                         </li>
                        <li className="main-nav__list-element">
                            <Link className="main-nav__link"
                                to="FourSteps"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={20}
                                duration={500}
                                isDynamic={true}
                            >O co chodzi? 
                            </Link>
                        </li>                   
                        <li className="main-nav__list-element">
                            <Link className="main-nav__link"
                                to="about"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={20}
                                duration={500}
                                isDynamic={true}
                            >O nas      
                            </Link>
                        </li>
                        <li className="main-nav__list-element">
                            <Link className="main-nav__link"
                                to="Help"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={20}
                                duration={500}
                                isDynamic={true}
                            >Fundacja i oraganizacje
                            </Link>
                        </li>
                        <li className="main-nav__list-element">
                            <Link className="main-nav__link"
                                to="Contact"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={50}
                                duration={500}
                                isDynamic={true}
                            >Kontakt
                        </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    } else {
        return (
                <>
                    <div className="home-header">
                        <div className="hamburger-menu">
                            <span className="hamburger-menu__icon"></span>
                                <div className="hamburger-menu__hamburger-field" onClick={handleClick} style={activeMenu? {opacity: "0", transition: "opacity 0.3s" }: null}>
                                    <span className="hamburger-menu__span"></span>
                                    <span className="hamburger-menu__span"></span>
                                    <span className="hamburger-menu__span"></span>
                                </div>
                        </div>
                            <HomeLoginNav/>
                            <nav className="main-nav">
                                <ul className="main-nav__list" style={activeMenu? {right:'0px'}: null} >
                                    <FontAwesomeIcon icon={faTimesCircle} className="times-circle" onClick={handleCloseMenu}/>
                                    <HomeLoginNavMin/>
                                    <li className="main-nav__list-element"><HashLink className="main-nav__link" to="/">Start</HashLink></li>
                                    <li className="main-nav__list-element"><HashLink className="main-nav__link" to="/#FourSteps">O co chodzi?</HashLink></li>
                                    <li className="main-nav__list-element"><HashLink className="main-nav__link" to="/#about">O nas</HashLink></li>
                                    <li className="main-nav__list-element"><HashLink className="main-nav__link" to="/#Help">Fundacja i oraganizacje</HashLink></li>
                                    <li className="main-nav__list-element"><HashLink className="main-nav__link" to="/#Contact">Kontakt</HashLink></li>
                                </ul>
                            </nav>
                    </div> 
                </>
            )
    }
        

 
    
}

export {HomeHeader}