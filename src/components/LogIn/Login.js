import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {


    return  (
        <>
        
        <section className="loginSection">
            <h1>Zaloguj się</h1>
            <div className="loginDecoration"></div>
            <form className="loginForm">
                <div className="loginInputGroup">
                    <div className="loginInputContainer">
                        <label htmlFor="loginEmail">Email</label>
                        <input type="email" id="loginEmail"></input>
                    </div>
                    <div className="loginInputContainer">
                        <label htmlFor="loginPasswd">Hasło</label>
                        <input type="password"></input>
                    </div>
                    
                </div>
                <div className="loginButtonGroup">
                    <Link to ='rejestracja'><button className="signInBtn" type="button">Załóż konto</button></Link>
                    <button className="logInBtn" type="submit">Zaloguj się</button>
                </div>

            </form>

        </section>

        </>
    )
}

export {Login}