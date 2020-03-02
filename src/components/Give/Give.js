import React from 'react'
import {GiveMainSec} from '../GiveMainSec/GiveMainSec'
import {useSelector}from 'react-redux'
import {HomeContact} from '../HomeContact/HomeContact';
import {GiveSteps} from '../GiveSteps/GiveSteps';
import {withRouter} from 'react-router-dom';
import {HomeHeader} from '../HomeHeader/HomeHeader'

const Give = () => {
    const logged = useSelector(state => state.loggedUser.email)
    const sideMenu = useSelector(state=>state.SideMenu)
    
    const style = {
        position: "fixed", 
        height: "120vh", 
        width: "120vw", 
        backgroundColor: "rgba(0,0,0,0.5)", 
        zIndex: "999", 
        transition: "1s"}

    if(logged) {
        return (
            <>
            <div className="shadow-box" style={sideMenu? style :null}></div>
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
                </div>
            </>
        )   

    } else {
        return <h2>No access</h2>
    }
}

export default withRouter(Give)