import React from 'react'
import {NavLink} from 'react-router-dom'
import { useHistory } from "react-router-dom"
import {auth} from '../../config'
import {useState} from  'react'


const HomeLoginNav = () => {
    const [logged, setLogged]  = useState(null)
    const history = useHistory();
    
    auth.onAuthStateChanged((e)=> {
        if(e) {
            setLogged(e.email)
            
        }
        else setLogged(null)
    })

    const handleClick = () => {
        auth.signOut().then( ()=> {
            setLogged(null);
            history.push('/wylogowano')

        })
        .catch((error)=>console.log(error))
    }

    if (logged){
        return (    
            <nav className="loginNav">
            <ul className="navigation loginUl_logged">
                <li className="HiLogged">Cześć {logged}!</li>
                <NavLink to='/oddaj-rzeczy'><li className="oddaj_link">Oddaj rzeczy</li></NavLink>
                <li onClick={handleClick}>Wyloguj</li>
               
            </ul>
        </nav>
        )
    } else {
        return (    
            <nav className="loginNav">
            <ul className="navigation loginUl">
                <NavLink to='/logowanie'><li>Zaloguj</li></NavLink>
                <NavLink to ='rejestracja'><li>Załóż konto</li></NavLink>
               
            </ul>
        </nav>
        )
    }

} 


export {HomeLoginNav}