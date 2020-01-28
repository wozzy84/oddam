import React from 'react'
import SvgIcon1 from '../../assets/Icons/Icon1'
import SvgIcon1Min from '../../assets/Icons/Icon1Min'
import SvgIcon2 from '../../assets/Icons/Icon2'
import SvgIcon2Min from '../../assets/Icons/Icon2Min'
import SvgIcon3 from '../../assets/Icons/Icon3'
import SvgIcon3Min from '../../assets/Icons/Icon3Min'
import SvgIcon4 from '../../assets/Icons/Icon4'
import SvgIcon4Min from '../../assets/Icons/Icon4Min'
import {useSelector}from 'react-redux'
import {Link} from 'react-router-dom'

const HomeFourSteps = () => {
    
    const logged = useSelector(state => state.loggedUser.email)

    return (
        <section className="home-four-steps" id="FourSteps">
            <div className="home-four-steps__call-to-action">
                Wystarczą 4 proste kroki
            </div>
            <div className="home-four-steps__decoration"></div>
            <div className="home-four-steps__icon-group">
                <div className="home-four-steps-icon__container">
                    <SvgIcon1 className="home-four-steps-icon__icon"/>
                    <SvgIcon1Min className="home-four-steps-icon__icon--min"/>
                    <p className="home-four-steps-icon__icon-header">Wybierz rzeczy</p>
                    <span className="home-four-steps-icon__bar"></span>
                    <p className="home-four-steps-icon__text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="home-four-steps-icon__container">
                    <SvgIcon2 className="home-four-steps-icon__icon"/>
                    <SvgIcon2Min className="home-four-steps-icon__icon--min"/>
                    <p className="home-four-steps-icon__icon-header">Spakuj je</p>
                    <span className="home-four-steps-icon__bar"></span>
                    <p className="home-four-steps-icon__text" >wkorzystaj z woków na śmieci</p>
                </div>
                <div className="home-four-steps-icon__container">
                    <SvgIcon3 className="home-four-steps-icon__icon"/>
                    <SvgIcon3Min className="home-four-steps-icon__icon--min"/>
                    <p className="home-four-steps-icon__icon-header">Zdecyduj komu chcesz pomóc</p>
                    <span className="home-four-steps-icon__bar"></span>
                    <p className="home-four-steps-icon__text">wybierz zaufane miejsce</p>
                </div>
                <div className="home-four-steps-icon__container  home-for-steps-icon__container--icon-4">
                    <SvgIcon4 className="home-four-steps-icon__icon"/>
                    <SvgIcon4Min className="home-four-steps-icon__icon--min"/>
                    <p className="home-four-steps-icon__icon-header" >Zamów kuriera</p>
                    <span className="home-four-steps-icon__bar"></span>
                    <p className="home-four-steps-icon__text" >kurier przyjedzie w dogodnym terminie</p>
                </div>
                </div>
            <div>
                <button className="home-four-steps__button">
                    <Link className="home-four-steps__link" to={logged?'oddaj-rzeczy':'logowanie'}>ODDAJ<br/>RZECZY</Link>
                </button>
            </div>  
        </section>
    )
}

export {HomeFourSteps}