import React from 'react';
import { HomeMainPic } from '../HomeMainPic/HomeMainPic';
import { HomeHeader} from '../HomeHeader/HomeHeader';
import { HomeMainSec} from '../HomeMainSec/HomeMainSec';
import { HomeThreeCol} from '../HomeThreeCol/HomeThreeCol';
import { HomeFourSteps} from '../HomeFourSteps/HomeFourSteps'
import { HomeAbout } from '../HomeAbout/HomeAbout';
import { HomeHelp } from '../HomeHelp/HomeHelp';


const HomeContainer = (props) => {
    return (
        <div className="HomeContainer">
             <div className="Header_MainSec_container">
            <HomeMainPic/>
            <div className="RightSubContainer">
                <HomeHeader/>
                <HomeMainSec/>
            </div>
           

        </div>
            <HomeThreeCol/>
            <HomeFourSteps/>
            <HomeAbout/>
            <HomeHelp/>
        </div>
       
    )
}

export {HomeContainer}