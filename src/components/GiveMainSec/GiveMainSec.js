import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faCheck}  from '@fortawesome/free-solid-svg-icons'

const GiveMainSec = () => {

    return (
        <>
            <section className="give-main__section">
            <div className="give-main__call-to-action">
                <h2 className="give-main__title">Oddaj rzeczy, których już nie chcesz<br/>POTRZEBUJĄCYM</h2>
                <div className="give-main__decoration"></div>
                <p className="give-main__text"> Wystarczą 4 proste Kroki:</p>
            </div>
            <div className="give-four-steps">
                <div className="give-four-steps__square">
                    <div className="give-four-steps__rotated-text">
                        <span className="give-four-steps__nb-span">1</span>
                        <p className="give-four-steps__sqr-text">Wybierz rzeczy</p>
                    </div>
                </div>
                <div className="give-four-steps__square">
                    <div className="give-four-steps__rotated-text">
                        <span className="give-four-steps__nb-span">2</span>
                        <p className="give-four-steps__sqr-text">Spakuj w worki</p>
                    </div>
                </div>
                <div className="give-four-steps__square">
                    <div className="give-four-steps__rotated-text">
                        <span className="give-four-steps__nb-span">3</span>
                        <p className="give-four-steps__sqr-text">Wybierz fundację</p>
                    </div>
                </div>
                <div className="give-four-steps__square">
                    <div className="give-four-steps__rotated-text">
                        <span className="give-four-steps__nb-span">4</span>
                        <p className="give-four-steps__sqr-text">Zamów kuriera</p>
                    </div>
                </div>
            </div>
            <div className="give-main-min">
                <div className="give-main-min__text-container">
                    <p className="give-main-min__text">
                        Oddaj przeczy których już nie chcesz
                    </p>
                    <p className="give-main-min__text">
                        POTRZEBUJĄCYM
                    </p>
                    <p className="give-main-min__text give-main-min__text--last">
                        Wystarczą 4 proste kroki
                    </p>
                </div>
                <div className="give-main-min__steps-container">
                    <div className="give-main-min__steps-square give-main-min__steps-square--active">1</div>
                    <div className="give-main-min__steps-square">2</div>
                    <div className="give-main-min__steps-square">3</div>
                    <div className="give-main-min__steps-square">4</div>
                    <div className="give-main-min__steps-square"><FontAwesomeIcon icon={faCheck}/></div>
                </div>
            </div>
            </section>
        </>
    )
}

export {GiveMainSec}