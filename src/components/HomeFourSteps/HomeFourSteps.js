import React from 'react'
import SvgIcon1 from '../../assets/Icons/Icon1'
import SvgIcon2 from '../../assets/Icons/Icon2'
import SvgIcon3 from '../../assets/Icons/Icon3'
import SvgIcon4 from '../../assets/Icons/Icon4'
import {useSelector}from 'react-redux'
import {Link} from 'react-router-dom'
const HomeFourSteps = () => {
    const logged = useSelector(state => state.loggedUser.email)

    return (
      
        <section className="HomeFourSteps" id="FourSteps">
            <div className="four_steps_call2action">
                Wystarczą 4 proste kroki
            </div>
            <div className="four_steps_decoration"></div>
            <div className="fours_steps_icons">
                <div className="iconDiv">
                    <SvgIcon1/>
                    <p className="icon_header">Wybierz rzeczy</p>
                    <span className="decoration_bar"></span>
                    <p className="icon_text">ubrania, zabawki, sprzęt i inne</p>
                </div>
                <div className="iconDiv">
                    <SvgIcon2/>
                    <p className="icon_header">Spakuj je</p>
                    <span className="decoration_bar"></span>
                    <p className="icon_text" >wkorzystaj z woków na śmieci</p>
                </div>
                <div className="iconDiv">
                    <SvgIcon3/>
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <span className="decoration_bar"></span>
                    <p>wybierz zaufane miejsce</p>
                </div>
                <div className="iconDiv iconDiv4">
                    <SvgIcon4/>
                    <p className="icon_header" >Zamów kuriera</p>
                    <span className="decoration_bar"></span>
                    <p className="icon_text" >kurier przyjedzie w dogodnym terminie</p>
                </div>
                </div>
            <div>
                <button className="four_steps_button"><Link to={logged?'oddaj-rzeczy':'logowanie'}>ODDAJ<br/>RZECZY</Link></button>
            </div>


            

        </section>

       
    )
}

export {HomeFourSteps}