import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';

const Login = () => {

    const [emailError, setEmailError] = useState(false);
    const [passwdError, setPasswdError] = useState(false); 
    const redBar = {borderBottom: "1px solid #D8000C"};
    const blackBar = {borderBottom: "1px solid   #3C3C3C"};  
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [submitTry, setSubmitTry] = useState(false)

    const handleChange = (e) => {
        switch (e.currentTarget.id){
            case "loginEmail":
            setEmail(e.currentTarget.value)
            return
            case "loginPasswd":
            setPasswd(e.currentTarget.value)
            return
        }
    }


    const validateEmail = (e) =>{
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(e).toLowerCase());
    }

    const validatePasswd = (e) => {
        if (e.length >= 6) {
            return true
        };
    }



    const handleClick = (e) => {
        e.preventDefault();
        const emailValidatiton = validateEmail(email);
        const passwdValidaion = validatePasswd(passwd);
        setEmailError(!emailValidatiton);
        setPasswdError(!passwdValidaion);
        if (submitTry==false) {
            setSubmitTry(true)
        }
        
    }

    useEffect(()=> {
        const emailValidatiton = validateEmail(email);
        const passwdValidaion = validatePasswd(passwd);
        if (submitTry==true) {
             setEmailError(!emailValidatiton);
             setPasswdError(!passwdValidaion);
        }
        
       
    },[email, passwd ])



    return  (
        <>
        
        <section className="loginSection">
            <h1>Zaloguj się</h1>
            <div className="loginDecoration"></div>
            <form className="loginForm">
                <div className="loginInputGroup">
                    <div className="loginInputContainer">
                        <label htmlFor="loginEmail">Email</label>
                        <input type="email" id="loginEmail" style={emailError? redBar: blackBar} value={email} onChange={handleChange}></input>
                        <p className="errorMsg" style={emailError? {opacity: "1"}: {opacity: 0}}  >Podany email jest nieprawidłowy!</p>
                    </div>
                    <div className="loginInputContainer">
                        <label htmlFor="loginPasswd">Hasło</label>
                        <input type="password"  id="loginPasswd" style={passwdError? redBar: blackBar} value={passwd} onChange={handleChange}></input>
                        <p  className="errorMsg" style={passwdError? {opacity: "1"}: {opacity: 0}}  >Podane hasło jest za krótkie!</p>
                    </div>
                    
                </div>  
                <div className="loginButtonGroup">
                    <Link to ='rejestracja'><button className="signInBtn" type="button">Załóż konto</button></Link>
                    <button className="logInBtn" type="submit" onClick={handleClick}>Zaloguj się</button>
                </div>

            </form>

        </section>

        </>
    )



}

export {Login}