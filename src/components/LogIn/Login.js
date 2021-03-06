import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../../config";
import { useHistory } from "react-router-dom";
import { HomeHeader } from "../HomeHeader/HomeHeader";
import { useSelector } from "react-redux";

const Login = ({ match }) => {
  const [emailError, setEmailError] = useState(false);
  const [passwdError, setPasswdError] = useState(false);
  const redBar = { borderBottom: "1px solid #D8000C" };
  const blackBar = { borderBottom: "1px solid   #3C3C3C" };
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [submitTry, setSubmitTry] = useState(false);
  const sideMenu = useSelector(state => state.SideMenu);
  const history = useHistory();

  const style = {
    position: "fixed",
    height: "120vh",
    width: "120vw",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: "999",
    transition: "1s"
  };

  const [loginError, setLoginError] = useState(false);

  const handleChange = e => {
    switch (e.currentTarget.id) {
      case "login-email":
        setEmail(e.currentTarget.value);
        return;
      case "login-passwd":
        setPasswd(e.currentTarget.value);
        return;
    }
  };

  const validateEmail = e => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(e).toLowerCase());
  };

  const validatePasswd = e => {
    if (e.length >= 6) {
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
    if (emailValidatiton && passwdValidaion) {
      auth
        .signInWithEmailAndPassword(email, passwd)
        .then(cred => {
          console.log(cred.user.email);
          history.push("/");
          setLoginError(false);
        })
        .catch(function(error) {
          console.error(error.code, error.message);
          setLoginError(true);
        });
    }
  };

  useEffect(() => {
    const emailValidatiton = validateEmail(email);
    const passwdValidaion = validatePasswd(passwd);
    if (submitTry == true) {
      setEmailError(!emailValidatiton);
      setPasswdError(!passwdValidaion);
    }
  }, [email, passwd]);

  return (
    <>
      <div className="shadow-box" style={sideMenu ? style : null}></div>
      <div className="login-container">
        <div className="login-header-container">
          <HomeHeader currentLocation={match.url} />
        </div>
        <section className="login-section">
          <div className="login-form-container">
            <h1 className="login-form-container__title">Zaloguj się</h1>
            <div className="login-form-container__decoration"></div>
            <form className="login-form ">
              <div className="login-form__input-group">
                <div className="login-form__input-container">
                  <label className="login-form__label" htmlFor="login-email">
                    Email
                  </label>
                  <input
                    className="login-form__input"
                    type="email"
                    id="login-email"
                    style={emailError ? redBar : blackBar}
                    value={email}
                    onChange={handleChange}
                  ></input>
                  <p
                    className="login-form__error "
                    style={emailError ? { opacity: "1" } : { opacity: 0 }}
                  >
                    Podany email jest nieprawidłowy!
                  </p>
                </div>
                <div className="login-form__input-container">
                  <label className="login-form__label" htmlFor="loginPasswd">
                    Hasło
                  </label>
                  <input
                    className="login-form__input"
                    type="password"
                    id="login-passwd"
                    style={passwdError ? redBar : blackBar}
                    value={passwd}
                    onChange={handleChange}
                  ></input>
                  <p
                    className="login-form__error "
                    style={passwdError ? { opacity: "1" } : { opacity: 0 }}
                  >
                    Podane hasło jest za krótkie!
                  </p>
                </div>
                <p
                  className="login-form__error "
                  style={loginError ? { opacity: "1" } : { opacity: 0 }}
                >
                  Błąd logowania. Podany e-mail lub hasło są nieprawidłowe
                </p>
              </div>
              <div className="login-form__button-group">
                <button className="login-form__button" type="button">
                  <Link to="rejestracja" className="login-form__link">
                    Załóż konto
                  </Link>
                </button>
                <button
                  className="login-form__button login-form__button--log-in"
                  type="submit"
                  onClick={handleClick}
                >
                  Zaloguj się
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
