import React from 'react'
import {GiveMainSec} from '../GiveMainSec/GiveMainSec'
import {useSelector}from 'react-redux'
import { HomeContact } from '../HomeContact/HomeContact';
import { GiveSteps } from '../GiveSteps/GiveSteps';
import {HomeFooter} from '../HomeFooter/HomeFooter';
import {withRouter} from 'react-router-dom';
import {HomeHeader} from '../HomeHeader/HomeHeader'



const Give = () => {
    const logged = useSelector(state => state.loggedUser.email)
  
    if(logged) {
        return (
            <>
                <div className="give__container">
                    <div className="give__main-sec-container">
                        <div className="give__main-picture"></div>
                        <div className="give__right-subcontainer">
                            <HomeHeader/>
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

export default withRouter(Give)