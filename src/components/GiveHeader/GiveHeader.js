import React from 'react'

import {HomeLoginNav} from '../HomeLoginNav/HomeLoginNav'
import { HashLink as Link } from 'react-router-hash-link';

const GiveHeader = () => {
    return (
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
    )
}

export {GiveHeader}