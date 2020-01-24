import React from "react"
import {useState, useEffect} from "react"

const HomeContact = ()  => {

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
            const data = { name:  name,
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
                setEmail("")
                setName("")
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
           <section className="HomeContactSec" id="Contact">
        <div className="ContactPic"></div>
        <div className="ContactTextContainer">
            <h2 className="contactTitle">Skontaktuj się z nami</h2>
            <div className="contactDecoration"></div>
            <p className="successInfo" style={validated? {opacity: "1"}: {opacity: 0}}>Wiadomość została wysłana! <br/>Wkrótce się sontaktujemy.</p>
            <form className="contactForm">
                <div className="inputGroup">
                    <div className="inputSubGroup">
                        <label>Wpis swoje imię</label>
                        < input type="text" id="textInput" className="nameInput" value={name} onChange={handleChange} style={nameError? redBar: blackBar} ></input> 
                        <p className="errorMsg" style={nameError? {opacity: "1"}: {opacity: 0}} >Podane imię jest nieprawidłowe!</p>
                    </div>
                    <div className="inputSubGroup">
                        <label>Wpisz swój email</label>
                        <input type="email" id="emailInput" value={email} onChange={handleChange} className="emailInput"  style={emailError? redBar: blackBar}></input>
                        <p className="errorMsg" style={emailError? {opacity: "1"}: {opacity: 0}} >Podany e-mail jest nieprawidłowy!</p>
                    </div>
               
                </div>
                <div className="textAreaGroup">
                    <label className="textAreaLabel"> Wpisz swoją wiadomość</label>
                    <textarea className="contactTextArea" id="textarea" value={message} onChange={handleChange} style={messageError? redBar: blackBar}></textarea>
                    <p className="errorMsg" style={messageError? {opacity: "1"}: {opacity: 0}}>Wiadomość musi mieć conajmniej 120 znaków!</p>
             
                </div>
                <div className="buttonContainer">
                <button type="submit" className="contactSubmit" onClick={handleClick}>Wyślij</button>    
                </div>
                
            </form>
        </div>
    </section> 
    )

}

export {HomeContact}