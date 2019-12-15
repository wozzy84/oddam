import React from 'react'
import {Link} from 'react-router-dom'

const Register = () => {


    return  (
        <>
        
        <section className="registerSection">
            <h1>Załóż konto</h1>
            <div className="registerDecoration"></div>
            <form className="registerForm">
                <div className="registerInputGroup">
                    <div className="registerInputContainer">
                        <label htmlFor="registerEmail">Email</label>
                        <input type="email" id="registerEmail"></input>
                    </div>
                    <div className="registerInputContainer">
                        <label htmlFor="registerPasswd">Hasło</label>
                        <input type="password"></input>
                    </div>
                    <div className="registerInputContainer">
                        <label htmlFor="registerPasswd">Powtórz hasło</label>
                        <input type="password"></input>
                    </div>
                    
                </div>
                <div className="registerButtonGroup">
                    <Link to ='/logowanie'><button className="RegLogInBtn" type="button">Zaloguj się</button></Link>
                    <button className="RegSignInBtn" type="submit">Załóż konto</button>
                </div>

            </form>

        </section>

        </>
    )
}

export {Register}