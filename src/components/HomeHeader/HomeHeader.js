import React from 'react'
import {Link} from 'react-scroll'
import {HashLink as HashLink} from 'react-router-hash-link';
import {HomeLoginNav} from '../HomeLoginNav/HomeLoginNav'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTimesCircle}  from '@fortawesome/free-solid-svg-icons'
import {HomeLoginNavMin} from '../HomeLoginNav/HomeLoginNavMin'
import {useState} from "react"
import {useSelector, useDispatch} from 'react-redux'
import {disableBodyScroll, clearAllBodyScrollLocks} from 'body-scroll-lock';
import OutsideClickHandler from 'react-outside-click-handler';
import ReactResizeDetector from 'react-resize-detector';


const HomeHeader = (props) => {
    const [activeMenu, setActiveMenu] = useState(false)
    const targetElement = document.querySelector('.home-container');
    const dispatch = useDispatch()  
    const options = {
        reserveScrollBarGap: true
    }
    const sideMenu = useSelector(state=>state.SideMenu)

    const handleClick = () => {
        setActiveMenu(true)
        document.body.style.backgroundColor = "grey";
        document.body.style.transition = "background-color 1s ";
        dispatch({
            type: "SIDE_MENU",
            active: true
        })
        disableBodyScroll(targetElement, options)
        
    }

    const handleCloseMenu = () => {
        setActiveMenu(false)
        document.body.style.backgroundColor = "transparent"
        dispatch({
            type: "SIDE_MENU",
            active: false
        })
        clearAllBodyScrollLocks()
    }
    
    const handlePass = () => {
        handleCloseMenu()
     } 
    const onResize = () => {
        if(sideMenu && window.innerWidth > 1023) {
            document.body.style.transition = "background-color 0s ";
            handleCloseMenu()
        }
    }
     
    
    if (props.currentLocation==="/"){
        return (
            
            <OutsideClickHandler
            onOutsideClick={() => {
                handleCloseMenu()
             }}>
            <div className="home-header" >
            <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
                <div className="hamburger-menu" >
                    <span className="hamburger-menu__icon" onClick={handleCloseMenu}></span>
                    <div className="hamburger-menu__hamburger-field" onClick={handleClick} style={activeMenu? {opacity: "0", transition: "opacity 0.3s" }: null}>
                        <span className="hamburger-menu__span"></span>
                        <span className="hamburger-menu__span"></span>
                        <span className="hamburger-menu__span"></span>
                    </div>
                </div>
                <HomeLoginNav pass={handlePass} />
                <nav className="main-nav">
                    <ul className="main-nav__list" style={activeMenu? {right:'0px'}: null} >
                    <FontAwesomeIcon icon={faTimesCircle} className="times-circle" onClick={handleCloseMenu}/>
                        <HomeLoginNavMin pass={handlePass}/>
                        <li className="main-nav__list-element">
                            <Link className="main-nav__link" onClick={handleCloseMenu}
                               to="home"
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
                            <Link className="main-nav__link" onClick={handleCloseMenu}
                                to="FourSteps"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-20}
                                duration={500}
                                isDynamic={true}
                            >O co chodzi? 
                            </Link>
                        </li>                   
                        <li className="main-nav__list-element main-nav__list-element--about">
                            <Link className="main-nav__link  main-nav__link--about " onClick={handleCloseMenu}
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
                            <Link className="main-nav__link" onClick={handleCloseMenu}
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
                            <Link className="main-nav__link" onClick={handleCloseMenu}
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
            </OutsideClickHandler>
        )
    } else {
        return (
                <>
                    <OutsideClickHandler
            onOutsideClick={() => {
             handleCloseMenu()
             }}>
                    <div className="home-header">
                    <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
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
                                    <HomeLoginNavMin pass={handlePass}/>
                                    <li className="main-nav__list-element"><HashLink className="main-nav__link" onClick={handleCloseMenu} to="/">Start</HashLink></li>
                                    <li className="main-nav__list-element"><HashLink className="main-nav__link" onClick={handleCloseMenu} to="/#FourSteps">O co chodzi?</HashLink></li>
                                    <li className="main-nav__list-element"><HashLink className="main-nav__link" onClick={handleCloseMenu} to="/#about">O nas</HashLink></li>
                                    <li className="main-nav__list-element"><HashLink className="main-nav__link" onClick={handleCloseMenu} to="/#Help">Fundacja i oraganizacje</HashLink></li>
                                    <li className="main-nav__list-element"><HashLink className="main-nav__link" onClick={handleCloseMenu} to="/#Contact">Kontakt</HashLink></li>
                                </ul>
                            </nav>
                    </div> 
                    </OutsideClickHandler>
                </>
            )
    }
        
    onResize = () => {
        console.log(":P")
    }
 
    
}

export {HomeHeader}