import React from 'react'
import {NavLink} from 'react-router-dom'
import { useHistory } from "react-router-dom"
import {auth} from '../../config'
import { useSelector, useDispatch} from 'react-redux'


const HomeLoginNav = () => {

    const history = useHistory();
    const dispatch = useDispatch()
    const logged = useSelector(state => state.loggedUser.email)

    const handleClick = () => {
        auth.signOut().then( ()=> {
            dispatch({
                type: "LOGGED_USER",
                payload: {
                    email: null,
                    uid: null
                }
            })
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