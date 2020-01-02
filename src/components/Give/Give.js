import React from 'react'
import {GiveMainSec} from '../GiveMainSec/GiveMainSec'
import {GiveHeader} from '../GiveHeader/GiveHeader'
import {useSelector}from 'react-redux'
import { GiveRibbon } from '../GiveRibbon/GiveRibbon';
import { HomeContact } from '../HomeContact/HomeContact';
import { GiveSteps } from '../GiveSteps/GiveSteps';



const Give = () => {
    const logged = useSelector(state => state.loggedUser.email)
  
    if(logged) {
        return (
            <>
                <div className="GiveContainer">
                    <div className="Give_MainSec_container">
                        <div className="GiveMainPic"></div>
                        <div className="GiveRightSubContainer">
                            <GiveHeader/>
                            <GiveMainSec/>
                        </div>
                            

                     </div>
                    <GiveRibbon/>
                    <GiveSteps/>
                    <HomeContact/>
                </div>

            </>
        )
         

    } else {
        return <h2>No access</h2>
    }


}

export {Give}