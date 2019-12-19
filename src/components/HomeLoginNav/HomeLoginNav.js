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
                <li className="oddaj_link"><NavLink to='/oddaj-rzeczy'>Oddaj rzeczy</NavLink></li>
                <li onClick={handleClick}>Wyloguj</li>
               
            </ul>
        </nav>
        )
    } else {
        return (    
            <nav className="loginNav">
            <ul className="navigation loginUl">
                <li><NavLink to='/logowanie'>Zaloguj</NavLink></li>
                <li><NavLink to ='rejestracja'>Załóż konto</NavLink></li>
               
            </ul>
        </nav>
        )
    }

} 


export {HomeLoginNav}