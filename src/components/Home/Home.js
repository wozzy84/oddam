import React from 'react'
import { HomeHeader } from '../HomeHeader/HomeHeader';
import { HomeMainSec } from '../HomeMainSec/HomeMainSec';
import { HomeThreeCol } from '../HomeThreeCol/HomeThreeCol';
import { HomeFourSteps } from '../HomeFourSteps/HomeFourSteps'
import { HomeAbout  } from '../HomeAbout/HomeAbout';
import { HomeHelp } from '../HomeHelp/HomeHelp';
import { HomeContact } from '../HomeContact/HomeContact';
import { HomeFooter } from '../HomeFooter/HomeFooter'

const Home = () => {

  return (
    <div className="home-container">
      <div className="header-main-sec-container">
          <div className="header-main-sec-container__picture"></div>
          <div className="header-main-sec-container__subcontiner">
              <HomeHeader/>
              <HomeMainSec/>
          </div>
      </div>
            <HomeThreeCol/>
            <HomeFourSteps/>
            <HomeAbout/>
            <HomeHelp/>
            <HomeContact/> 
            <HomeFooter/>
    </div>
       
    )
}

export {Home}