import React from 'react'
import {HeaderLogReg} from '../Header_log_reg/HeaderLogReg'
import {auth} from '../../config'
import {useState} from 'react'

const Oddaj = () => {

    const [logged, setLogged]  = useState(null)
  
    
    auth.onAuthStateChanged((e)=> {
        if(e) {
            setLogged(e.email)
            
        }  else {
            setLogged(null)
        } 
    })

    if(logged) {
        return <HeaderLogReg/>
    } else {
        return <h2>No access</h2>
    }


}

export {Oddaj}