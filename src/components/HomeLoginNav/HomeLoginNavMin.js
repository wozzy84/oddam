import React from 'react'
import {NavLink} from 'react-router-dom'
import { useHistory } from "react-router-dom"
import {auth} from '../../config'
import { useSelector, useDispatch} from 'react-redux'


const HomeLoginNavMin = () => {

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
                <>
                <li className= "main-nav__list-element ">Cześć {logged}!</li>
                <li className="main-nav__list-element"><NavLink to='/oddaj-rzeczy' className="main-nav__link">Oddaj rzeczy</NavLink></li>
                <li onClick={handleClick} className="main-nav__list-element">Wyloguj</li>
                </>
            )
    } else {
        return (    
            <>
                <li className="main-nav__list-element" ><NavLink to='/logowanie' className="main-nav__link">Zaloguj</NavLink></li>
                <li className="main-nav__list-element" ><NavLink to ='rejestracja' className="main-nav__link">Załóż konto</NavLink></li> 
            </>
        )
    }

} 


export {HomeLoginNavMin}