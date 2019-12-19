import React from 'react'
import {Link} from 'react-scroll'
import {HomeLoginNav} from '../HomeLoginNav/HomeLoginNav'

const HomeHeader = () => {
    return (
        <div className="HomeHeader">
            <HomeLoginNav/>
            <nav className="mainNav">
                <ul className="navigation mainUl" >
                    <li>
                        <Link activeClass="active"
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
                        <Link activeClass="active"
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
                        <Link activeClass="active"
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
                        <Link activeClass="active"
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
                        <Link activeClass="active"
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