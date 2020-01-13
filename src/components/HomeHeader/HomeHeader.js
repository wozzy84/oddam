import React from 'react'
import {Link} from 'react-scroll'
import {HomeLoginNav} from '../HomeLoginNav/HomeLoginNav'

const HomeHeader = () => {
    return (
        <div className="HomeHeader">
           
            <HomeLoginNav/>
            <nav className="mainNav">
            <div className="hamburger"><span className="hamburger__span"></span><span className="hamburger__span"></span><span className="hamburger__span"></span></div>
                <ul className="navigation mainUl" >
                    <li>
                        <Link className="active"
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
                    <li>
                        <Link className="active"
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
                    <li>
                        <Link className="active"
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
                    <li>
                        <Link className="active"
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
                    <li>
                        <Link className="active"
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
}

export {HomeHeader}