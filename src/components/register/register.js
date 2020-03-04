import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../../config";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { HomeHeader } from "../../components/HomeHeader/HomeHeader";
import { useSelector } from "react-redux";

const Register = ({ match }) => {
  const [emailError, setEmailError] = useState(false);
  const [passwdError, setPasswdError] = useState(false);
  const [authError, setAuthError] = useState(false);
  const redBar = { borderBottom: "1px solid #D8000C" };
  const blackBar = { borderBottom: "1px solid   #3C3C3C" };
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [passwdRepeat, setPasswdRepeat] = useState("");
  const [submitTry, setSubmitTry] = useState(false);
  const history = useHistory();
  const sideMenu = useSelector(state => state.SideMenu);

  const style = {
    position: "fixed",
    height: "120vh",
    width: "120vw",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: "999",
    transition: "1s"
  };

  auth.onAuthStateChanged(user => {
    if (user) {
      history.push("/");
    }
  });

  const handleChange = e => {
    switch (e.currentTarget.id) {
      case "registerEmail":
        setEmail(e.currentTarget.value);
        return;
      case "registerPasswd":
        setPasswd(e.currentTarget.value);
        return;
      case "registerPasswdrepeat":
        setPasswdRepeat(e.currentTarget.value);
        return;
    }
  };

  const validateEmail = e => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(e).toLowerCase());
  };

  const validatePasswd = e => {
    if (passwd == passwdRepeat) {
      return true;
    }
  };

  const handleClick = e => {
    e.preventDefault();
    const emailValidatiton = validateEmail(email);
    const passwdValidaion = validatePasswd(passwd);
    setEmailError(!emailValidatiton);
    setPasswdError(!passwdValidaion);
    if (submitTry == false) {
      setSubmitTry(true);
    }
    if (validateEmail(email) && validatePasswd) {
      auth
        .createUserWithEmailAndPassword(email, passwd)
        .catch(setAuthError(true));
    }
  };

  useEffect(() => {
    const emailValidatiton = validateEmail(email);
    const passwdValidaion = validatePasswd(passwd);
    if (submitTry == true) {
      setEmailError(!emailValidatiton);
      setPasswdError(!passwdValidaion);
    }
  }, [email, passwd, passwdRepeat]);

  return (
    <>
      <div className="shadow-box" style={sideMenu ? style : null}></div>
      <div className="register-container">
        <div className="register-header-container">
          <HomeHeader currentLocation={match.url} />
        </div>
      </div>
      <section className="register-section">
        <div className="register-form-container">
          <h1 className="register-form-container__title">Załóż konto</h1>
          <div className="register-form-container__decoration"></div>
          <form className="register-form">
            <div className="register-form__input-group">
              <div className="register-form__input-container">
                <label className="register-form__label" htmlFor="registerEmail">
                  Email
                </label>
                <input
                  className="register-form__input"
                  type="email"
                  id="registerEmail"
                  style={emailError ? redBar : blackBar}
                  value={email}
                  onChange={handleChange}
                ></input>
                <p
                  className="register-form__error"
                  style={emailError ? { opacity: "1" } : { opacity: 0 }}
                >
                  Niepoprawny email!
                </p>
              </div>
              <div className="register-form__input-group">
                <div className="register-form__input-container">
                  <label
                    className="register-form__label"
                    htmlFor="registerPasswd"
                  >
                    Hasło
                  </label>
                  <input
                    className="register-form__input"
                    type="password"
                    id="registerPasswd"
                    style={passwdError ? redBar : blackBar}
                    value={passwd}
                    onChange={handleChange}
                  ></input>
                  <p
                    className="register-form__error"
                    style={passwdError ? { opacity: "1" } : { opacity: 0 }}
                  >
                    Podane hasła są różne
                  </p>
                </div>
              </div>
              <div className="register-form__input-group">
                <div className="register-form__input-container">
                  <label
                    className="register-form__label"
                    htmlFor="registerPasswd"
                  >
                    Powtórz hasło
                  </label>
                  <input
                    className="register-form__input"
                    type="password"
                    id="registerPasswdrepeat"
                    style={passwdError ? redBar : blackBar}
                    value={passwdRepeat}
                    onChange={handleChange}
                  ></input>
                  <p
                    className="register-form__error"
                    style={passwdError ? { opacity: "1" } : { opacity: 0 }}
                  >
                    Podane hasła są różne
                  </p>
                </div>
              </div>
            </div>
            <p
              className="register-form__error"
              style={authError ? { opacity: "1" } : { opacity: 0 }}
            >
              Błąd! Podny email lub hasło są niepoprawne. Hasło powinno mieć
              min. 6 znaków.
            </p>
            <div className="register-form__button-group">
              <button
                className="register-form__button register-form__button--log-in"
                type="button"
              >
                <Link to="/logowanie" className="register-form__link">
                  Zaloguj się
                </Link>
              </button>
              <button
                className="register-form__button register-form__button--sign-in"
                type="button"
                onClick={handleClick}
              >
                Załóż konto
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default withRouter(Register);
