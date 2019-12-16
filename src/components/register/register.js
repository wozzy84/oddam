import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react';
import {auth} from '../../config'
import { useHistory } from "react-router-dom";

const Register = () => {
    const [emailError, setEmailError] = useState(false);
    const [passwdError, setPasswdError] = useState(false); 
    const redBar = {borderBottom: "1px solid #D8000C"};
    const blackBar = {borderBottom: "1px solid   #3C3C3C"};  
    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [passwdRepeat, setPasswdRepeat] = useState('')
    const [submitTry, setSubmitTry] = useState(false)
    const history = useHistory();
   

    const handleChange = (e) => {
        switch (e.currentTarget.id){
            case "registerEmail":
            setEmail(e.currentTarget.value)
            return
            case "registerPasswd":
            setPasswd(e.currentTarget.value)
            return
            case "registerPasswdrepeat":
            setPasswdRepeat(e.currentTarget.value)
            return
        }
    }

    const validateEmail = (e) =>{
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(e).toLowerCase());
    }

    const validatePasswd = (e) => {
        if (passwd==passwdRepeat) {
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
        if(validateEmail(email)&& validatePasswd) {
            auth.createUserWithEmailAndPassword(email, passwd)
            .then(cred => console.log(cred.user.uid));
            history.push('/')

        } else {
            console.log("Email bądź hasło jest błędne")
        }
        
    }

    useEffect(()=> {
        const emailValidatiton = validateEmail(email);
        const passwdValidaion = validatePasswd(passwd);
        if (submitTry==true) {
             setEmailError(!emailValidatiton);
             setPasswdError(!passwdValidaion);
        }
        
       
    },[email, passwd, passwdRepeat ])


    return  (
        <>
        
        <section className="registerSection">
            <h1>Załóż konto</h1>
            <div className="registerDecoration"></div>
            <form className="registerForm">
                <div className="registerInputGroup">
                    <div className="registerInputContainer">
                        <label htmlFor="registerEmail">Email</label>
                        <input type="email" id="registerEmail" style={emailError? redBar: blackBar} value={email} onChange={handleChange}></input>
                        <p className="errorMsg" style={emailError? {opacity: "1"}: {opacity: 0}}>Niepoprawny email!</p>
                    </div>
                    <div className="registerInputContainer">
                        <label htmlFor="registerPasswd">Hasło</label>
                        <input type="password" id="registerPasswd" style={passwdError? redBar: blackBar} value={passwd} onChange={handleChange}></input>
                        <p className="errorMsg" style={passwdError? {opacity: "1"}: {opacity: 0}} >Podane hasła są różne</p>
                    </div>
                    <div className="registerInputContainer">
                        <label htmlFor="registerPasswd">Powtórz hasło</label>
                        <input type="password" id="registerPasswdrepeat" style={passwdError? redBar: blackBar} value={passwdRepeat} onChange={handleChange}></input>
                        <p className="errorMsg" style={passwdError? {opacity: "1"}: {opacity: 0}} >Podane hasła są różne</p>
                    </div>
                    
                </div>
                <div className="registerButtonGroup">
                    <Link to ='/logowanie'><button className="RegLogInBtn" type="button">Zaloguj się</button></Link>
                    <button className="RegSignInBtn" type="submit" onClick={handleClick}>Załóż konto</button>
                </div>

            </form>

        </section>

        </>
    )
}

export {Register}