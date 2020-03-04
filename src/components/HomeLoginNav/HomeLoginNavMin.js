import React from "react";
import ReactDOM from "react-dom";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { auth } from "../../config";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
  faBoxOpen,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

const HomeLoginNavMin = props => {
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
    handlePass();
  };

  const handlePass = () => {
    props.pass();
  };

  if (logged) {
    return (
      <>
        <li className="main-nav__list-element main-nav__list-element--minified main-nav__list-element--minfied--hi-user">
          Cześć {logged}!
        </li>

        <li
          className="main-nav__list-element main-nav__list-element--minified"
          onClick={handlePass}
        >
          <NavLink
            to="/oddaj-rzeczy"
            className="main-nav__link main-nav__link--minfied"
          >
            <span className="main-nav_icon-container">
              <FontAwesomeIcon icon={faBoxOpen} className="main-nav__icon" />
            </span>
            Oddaj rzeczy
          </NavLink>
        </li>
        <li
          onClick={handleClick}
          onChange={handlePass}
          className="main-nav__list-element main-nav__list-element--minified main-nav__list-element--minfied--sign-out"
        >
          <span className="main-nav_icon-container">
            <FontAwesomeIcon icon={faSignOutAlt} className="main-nav__icon" />
          </span>
          Wyloguj
        </li>
        <span className="main-nav__bar"></span>
      </>
    );
  } else {
    return (
      <>
        <li
          className="main-nav__list-element main-nav__list-element--minified"
          onClick={handlePass}
        >
          <NavLink
            to="/logowanie"
            className="main-nav__link main-nav__link--minfied"
          >
            <span className="main-nav_icon-container">
              <FontAwesomeIcon icon={faSignInAlt} className="main-nav__icon" />
            </span>
            Zaloguj
          </NavLink>
        </li>
        <li
          className="main-nav__list-element main-nav__list-element--minified"
          onClick={handlePass}
        >
          <NavLink
            to="rejestracja"
            className="main-nav__link main-nav__link--minfied"
          >
            <span className="main-nav_icon-container">
              <FontAwesomeIcon icon={faUserPlus} className="main-nav__icon" />
            </span>
            Załóż konto
          </NavLink>
        </li>
        <span className="main-nav__bar"></span>
      </>
    );
  }
};

export { HomeLoginNavMin };
