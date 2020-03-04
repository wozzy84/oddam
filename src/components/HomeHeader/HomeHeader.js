import React from "react";
import { HashLink } from "react-router-hash-link";
import { HomeLoginNav } from "../HomeLoginNav/HomeLoginNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { HomeLoginNavMin } from "../HomeLoginNav/HomeLoginNavMin";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import OutsideClickHandler from "react-outside-click-handler";
import ReactResizeDetector from "react-resize-detector";

const HomeHeader = props => {
  const [activeMenu, setActiveMenu] = useState(false);
  const targetElement = document.querySelector(".home-container");
  const dispatch = useDispatch();
  const options = {
    reserveScrollBarGap: true
  };
  const sideMenu = useSelector(state => state.SideMenu);

  const handleClick = () => {
    setActiveMenu(true);
    dispatch({
      type: "SIDE_MENU",
      active: true
    });
    disableBodyScroll(targetElement, options);
  };

  const handleCloseMenu = () => {
    setActiveMenu(false);
    dispatch({
      type: "SIDE_MENU",
      active: false
    });
    clearAllBodyScrollLocks();
  };

  const handlePass = () => {
    handleCloseMenu();
  };

  const onResize = () => {
    if (sideMenu && window.innerWidth > 1023) {
      document.body.style.transition = "background-color 0s ";
      handleCloseMenu();
    }
  };
  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        handleCloseMenu();
      }}
    >
      <div className="home-header">
        <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
        <div className="hamburger-menu">
          <span
            className="hamburger-menu__icon"
            onClick={handleCloseMenu}
          ></span>
          <div
            className="hamburger-menu__hamburger-field"
            onClick={handleClick}
            style={
              activeMenu ? { opacity: "0", transition: "opacity 0.3s" } : null
            }
          >
            <span className="hamburger-menu__span"></span>
            <span className="hamburger-menu__span"></span>
            <span className="hamburger-menu__span"></span>
          </div>
        </div>
        <HomeLoginNav pass={handlePass} />
        <nav className="main-nav">
          <ul
            className="main-nav__list"
            style={activeMenu ? { right: "0px" } : null}
          >
            <FontAwesomeIcon
              icon={faTimesCircle}
              className="times-circle"
              onClick={handleCloseMenu}
            />
            <HomeLoginNavMin pass={handlePass} />
            <li className="main-nav__list-element">
              <HashLink
                className="main-nav__link"
                onClick={handleCloseMenu}
                smooth
                to="/#home"
              >
                Start
              </HashLink>
            </li>
            <li className="main-nav__list-element">
              <HashLink
                className="main-nav__link"
                onClick={handleCloseMenu}
                smooth
                to="/#FourSteps"
                scroll={el =>
                  el.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              >
                O co chodzi?
              </HashLink>
            </li>
            <li className="main-nav__list-element main-nav__list-element--about">
              <HashLink
                className="main-nav__link  main-nav__link--about "
                onClick={handleCloseMenu}
                smooth
                to="/#about"
                offset={100}
              >
                O nas
              </HashLink>
            </li>
            <li className="main-nav__list-element">
              <HashLink
                className="main-nav__link"
                onClick={handleCloseMenu}
                smooth
                to="/#Help"
              >
                Fundacja i oraganizacje
              </HashLink>
            </li>
            <li className="main-nav__list-element">
              <HashLink
                className="main-nav__link"
                onClick={handleCloseMenu}
                smooth
                to="/#Contact"
              >
                Kontakt
              </HashLink>
            </li>
          </ul>
        </nav>
      </div>
    </OutsideClickHandler>
  );
};

export { HomeHeader };
