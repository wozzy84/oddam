import React from "react"
import {useState, useEffect} from "react"
import { Link} from 'react-router-dom'
import {useSelector}from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faPhone, faEnvelope}  from '@fortawesome/free-solid-svg-icons'

const HomeContact = ()  => {

    const logged = useSelector(state => state.loggedUser.email)
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("")
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false)
    const [messageError, setMessageError] = useState(false)
    const [submitTry, setSubmitTry] = useState(false)
    const [validated, setValidated] = useState(false)
    const redBar = {borderBottom: "1px solid #D8000C"}
    const blackBar = {borderBottom: "1px solid   #3C3C3C"}  

    const handleChange = (e) => {
        switch (e.currentTarget.id){
            case "textInput":
            setName(e.currentTarget.value)
            return
            case "emailInput":
            setEmail(e.currentTarget.value)
            return
            case "textarea":
            setMessage(e.currentTarget.value)
            return
        }
    }
    const validateEmail = (e) =>{
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(e).toLowerCase());
    }

    const validateName = (e) => {
      let reg = /^\S+$/g;
      return reg.test(e)
    }
    const validateMessage = (e) => {
        if (e.length > 120) {
            return true
        };
        return false
    }

    const handleClick = (e) => {
        e.preventDefault();
        const emailValidatiton = validateEmail(email);
        const nameValidation = validateName(name.trim());
        const messageValidaion = validateMessage(message);
        setEmailError(!emailValidatiton);
        setNameError(!nameValidation);
        setMessageError(!messageValidaion);
        if (submitTry===false) {
            setSubmitTry(true)
        }
        if(emailValidatiton&&nameValidation&&messageValidaion) {{
            const url = 'https://fer-api.coderslab.pl/v1/portfolio/contact';
            const data = { 
                           name: name,
                           email: email,
                           message: message
                         };
            try {
                const response =  fetch(url, {
                method: 'POST', 
                body: JSON.stringify(data), 
                headers: {
                'Content-Type': 'application/json'
                }
                })
                .then( resp => resp.json())
                .then( data => {
                console.log( data );
                setValidated(true)
                setSubmitTry(false);
                setEmail("");
                setName("");
                setMessage("");
                });
            } catch (error) {
                console.error('Error:', error);
                }
        }} else {
            setValidated(false)
        }
    }

    useEffect(()=> {
        const emailValidatiton = validateEmail(email);
        const nameValidation = validateName(name.trim());
        const messageValidaion = validateMessage(message);
        if (submitTry===true) {
             setEmailError(!emailValidatiton);
             setNameError(!nameValidation);
             setMessageError(!messageValidaion);
        }
    },[email, name, message])
 
    return (
        <section className="home-contact" id="Contact">
               
        <div className="home-contact__picture"></div>
        <div className="home-contact__container">
            <h2 className="home-contact__title">Skontaktuj się z nami</h2>
            <div className="home-contact__decoration"></div>
            <p className="home-contact_success" style={validated? {opacity: "1"}: {opacity: 0}}>Wiadomość została wysłana! <br/>Wkrótce się sontaktujemy.</p>
            <form className="contact-form">
                <div className="contact-form__input-group">
                    <div className="contact-form__input-subgroup">
                        <label className="contact-form__label">Wpisz swoje imię</label>
                        <input type="text" id="textInput" className="contact-form__input contact-form__input--name" value={name} onChange={handleChange} style={nameError? redBar: blackBar} ></input> 
                        <p className="contact-form__error" style={nameError? {opacity: "1"}: {opacity: 0}} >Podane imię jest nieprawidłowe!</p>
                    </div>
                    <div className="contact-form__input-subgroup">
                        <label className="contact-form__label">Wpisz swój email</label>
                        <input type="email" id="emailInput" value={email} onChange={handleChange} className="contact-form__input contact-form__input--email"  style={emailError? redBar: blackBar}></input>
                        <p className="contact-form__error" style={emailError? {opacity: "1"}: {opacity: 0}} >Podany e-mail jest nieprawidłowy!</p>
                    </div>
                </div>
                <div className="contact-form__textarea-group">
                    <label className="contact-form__label contact-form__label--textarea"> Wpisz swoją wiadomość</label>
                    <textarea className="contact-form__textarea" id="textarea" value={message} onChange={handleChange} style={messageError? redBar: blackBar}></textarea>
                    <p className="contact-form__error" style={messageError? {opacity: "1"}: {opacity: 0}}>Wiadomość musi mieć conajmniej 120 znaków!</p>
                </div>
                <div className="contact-form__button-container">
                    <button type="submit" className="contact-form__submit" onClick={handleClick}>Wyślij</button>    
                </div>
            </form>
        </div>
        <div className="home-contact-min">
            <div style={logged?{display:"none"}:{display:"block"}}>
            <h2 className="home-contact-min__title">
                Chcesz oddać swoje rzeczy lub zorganizować lokalną zbórkę
            </h2>
            <button className="home-contact-min__button" type="button">
                <Link className="home-contact-min__button-link" to='logowanie'>Załóż konto </Link>
            </button>
            </div>
            <footer className="home-contact-min__footer">
                <span className="home-contact-min__icon"></span>
                <h3 className="home-contact-min__call-to-action">
                    Skontaktuj się z nami
                    <FontAwesomeIcon className="home-contact-min__fontawesome-icon" icon={faPhone}/>
                    <FontAwesomeIcon className="home-contact-min__fontawesome-icon" icon={faEnvelope} />
                </h3>
                <div className="home-contact-min__contact-links">
                    <p className="home-contact-min__paragraph"><a className="home-contact-min__link" href="#">Regulamin</a></p>
                    <p className="home-contact-min__paragraph"><a className="home-contact-min__link" href="#">Polityka Prywatności</a></p>
                    <p className="home-contact-min__paragraph"><a className="home-contact-min__link" href="#">Instrukcja jak spakować rzeczy do ubrania</a></p>  
                </div>
            </footer>
        </div>
    </section> 
    )
}

export {HomeContact}