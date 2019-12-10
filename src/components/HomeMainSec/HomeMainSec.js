import React from 'react';
import { Link} from 'react-router-dom'

const HomeMainSec = () => {
    return (
           
    <div className="HomeMainSec">
        <div className="MainSecContainer">
            <div className="callToAction"><p>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</p></div>
            <div className="decorationElement"></div>
            <div className="buttonsContainer">
               <Link to='logowanie'><button>RZECZY</button></Link> 
               <Link to='logowanie'><button id="org">ZORGANIZUJ ZBIÓRKĘ</button> </Link>
            </div>
        </div>    
    </div>  
      
    )
 
}

export {HomeMainSec}