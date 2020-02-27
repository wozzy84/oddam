import React from 'react'
import {HomeHeader} from '../HomeHeader/HomeHeader';
import {HomeMainSec} from '../HomeMainSec/HomeMainSec';
import {HomeThreeCol} from '../HomeThreeCol/HomeThreeCol';
import {HomeFourSteps} from '../HomeFourSteps/HomeFourSteps'
import {HomeAbout} from '../HomeAbout/HomeAbout';
import {HomeHelp} from '../HomeHelp/HomeHelp';
import {HomeContact} from '../HomeContact/HomeContact';
import {useSelector} from 'react-redux'


const Home = ({match}) => {
  const sideMenu = useSelector(state=>state.SideMenu)

  return (
    <>
    <div className="shadow-box" style={sideMenu? {position:"fixed", height: "120vh", width:"120vh", backgroundColor: "rgba(0,0,0,0.5)", zIndex:"999"}:null}></div>
    <div className="home-container">
      <div className="header-main-sec-container" id="home">
          <div className="header-main-sec-container__picture"></div>
          <div className="header-main-sec-container__subcontiner">
              <HomeHeader currentLocation={match.url}/>
              <HomeMainSec/>
          </div>
      </div>
            <HomeThreeCol/>
            <HomeFourSteps/>
            <HomeAbout/>
            <HomeHelp/>
            <HomeContact/> 
    </div>
    
    </>   
    )
}

export default Home