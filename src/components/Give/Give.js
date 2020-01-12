import React from 'react'
import {GiveMainSec} from '../GiveMainSec/GiveMainSec'
import {GiveHeader} from '../GiveHeader/GiveHeader'
import {useSelector}from 'react-redux'
import { HomeContact } from '../HomeContact/HomeContact';
import { GiveSteps } from '../GiveSteps/GiveSteps';
import {HomeFooter} from '../HomeFooter/HomeFooter';



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
                    <GiveSteps/>
                    <HomeContact/>
                    <HomeFooter/>
                </div>

            </>
        )   

    } else {
        return <h2>No access</h2>
    }


}

export {Give}