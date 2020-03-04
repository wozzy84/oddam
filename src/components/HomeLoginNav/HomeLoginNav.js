import React from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth } from "../../config";
import { useSelector, useDispatch } from "react-redux";

const HomeLoginNav = props => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logged = useSelector(state => state.loggedUser.email);

  const handleClick = () => {
    auth
      .signOut()
      .then(() => {
        dispatch({
          type: "LOGGED_USER",
          payload: {
            email: null,
            uid: null
          }
        });
        history.push("/wylogowano");
      })
      .catch(error => console.log(error));
  };

  if (logged) {
    return (
      <nav className="login-nav">
        <ul className="login-nav__list">
          <li className="login-nav__list-element login-nav__list-element--hi-user">
            Cześć {logged}!
          </li>
          <li className="login-nav__list-element">
            <NavLink className="login-nav__list-link" to="/oddaj-rzeczy">
              Oddaj rzeczy
            </NavLink>
          </li>
          <li
            className="login-nav__list-element login-nav__list-element--logout"
            onClick={handleClick}
          >
            Wyloguj
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="login-nav">
        <ul className="login-nav__list">
          <li className="login-nav__list-element">
            <NavLink className="login-nav__list-link" to="/logowanie">
              Zaloguj
            </NavLink>
          </li>
          <li className="login-nav__list-element">
            <NavLink className="login-nav__list-link" to="rejestracja">
              Załóż konto
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
};

export { HomeLoginNav };
