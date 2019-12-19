import React from 'react';
import { Link} from 'react-router-dom'
import {useSelector}from 'react-redux'

const HomeMainSec = () => {
    const logged = useSelector(state => state.loggedUser.email)

    return (
           
    <div className="HomeMainSec">
        <div className="MainSecContainer">
            <div className="callToAction"><p>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</p></div>
            <div className="decorationElement"></div>
            <div className="buttonsContainer">
               <button><Link to={logged?'oddaj-rzeczy':'logowanie'}>ODDAJ<br/>RZECZY</Link> </button>
                <button id="org"><Link to='logowanie'>ZORGANIZUJ ZBIÓRKĘ </Link></button> 
            </div>
        </div>    
    </div>  
      
    )
 
}

export {HomeMainSec}