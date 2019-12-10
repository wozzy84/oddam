import React from 'react';
import { HomeMainPic } from '../HomeMainPic/HomeMainPic';
import { HomeHeader} from '../HomeHeader/HomeHeader';
import { HomeMainSec} from '../HomeMainSec/HomeMainSec'


const HomeContainer = (props) => {
    return (
        <div className="HomeContainer">
            <HomeMainPic/>
            <div className="RightSubContainer">
                <HomeHeader/>
                <HomeMainSec/>
            </div>
        </div>

    )
}

export {HomeContainer}