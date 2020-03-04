import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeMainSec = () => {
  const logged = useSelector(state => state.loggedUser.email);

  return (
    <div className="home-main-sec">
      <div className="home-main-sec__container">
        <div className="home-main-sec__call-to-action">
          <p>
            Zacznij pomagać!
            <br /> Oddaj niechciane rzeczy w zaufane ręce
          </p>
        </div>
        <div className="home-scores">
          <div className="home-scores__field">
            <div className="home-scores__circle">10</div>
            <p className="home-score__text">
              oddanych
              <br /> worków
            </p>
          </div>
          <div className="home-scores__field">
            <div className="home-scores__circle">5</div>
            <p className="home-score__text">wspartych organizacji</p>
          </div>
          <div className="home-scores__field">
            <div className="home-scores__circle">7</div>
            <p className="home-score__text">zorganizowanych zbiórek</p>
          </div>
        </div>
        <div className="home-main-sec__decoration-element"></div>
        <div className="home-main-sec__button-container">
          <button className="home-main-sec__button">
            <Link
              className="home-main-sec__link"
              to={logged ? "oddaj-rzeczy" : "logowanie"}
            >
              ODDAJ
              <br />
              RZECZY
            </Link>
          </button>
          <button className="home-main-sec__button" id="org">
            <Link
              className="home-main-sec__link"
              to={logged ? "oddaj-rzeczy" : "logowanie"}
            >
              ZORGANIZUJ ZBIÓRKĘ{" "}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export { HomeMainSec };
