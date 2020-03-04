import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiveStepThreeList } from "./GiveStepThreeLisit/GiveStepThreList";
import { useState } from "react";
import ReactResizeDetector from "react-resize-detector";

const GiveStepThree = () => {
  const dispatch = useDispatch();
  const step = useSelector(state => state.currentStep);
  const reciever = useSelector(state => state.reciever);
  const organizationName = useSelector(state => state.organizationName);
  const localization = useSelector(state => state.Localization);
  const [localizationError, setLocalizationError] = useState(false);
  const [recieverError, setRecieverError] = useState(false);
  const [color, setColor] = useState({ backgroundColor: "yellow" });

  const handleClick = e => {
    if (
      (reciever.length && localization.Localization != "wybierz") ||
      e.currentTarget.value == "-1"
    ) {
      dispatch({
        type: "CURRENT_STEP",
        payload: {
          currentStep: +step.currentStep + parseInt(e.currentTarget.value)
        }
      });
    }
    if (!reciever.length) {
      setRecieverError(true);
    }
    if (localization.Localization == "wybierz") {
      setLocalizationError(true);
    }
  };

  const handleSelect = e => {
    dispatch({
      type: "SELECT_RECIEVER",
      payload: {
        currentReciever: e.currentTarget.innerText
      }
    });
    setRecieverError(false);
  };

  const handleChange = e => {
    dispatch({
      type: "TYPE_ORGANIZATION",
      organizationName: e.currentTarget.value
    });
  };

  const handlePass = e => {
    setLocalizationError(e);
  };

  const onResize = () => {
    if (window.innerWidth < 1023) {
      setColor({
        backgroundColor: "#3699be",
        color: "white",
        borderColor: "transparent"
      });
    } else {
      setColor({ backgroundColor: "yellow" });
    }
  };

  return (
    <>
      <section className="step-three__section">
        <ReactResizeDetector handleWidth handleHeight onResize={onResize} />
        <form className="step-three__form">
          <p className="step-counter">Krok 3/4</p>
          <h3 className="step-three__title">Lokalizacja:</h3>
          <div className="step-three__container">
            <GiveStepThreeList pass={handlePass} />
          </div>
          <div>
            <h4 className="step-three__subtitle"> Komu chcesz pomóc?</h4>
            <ul className="choose-reciever__list">
              <li
                className="choose-reciever__list-element"
                onClick={handleSelect}
                style={reciever.includes("dzieciom") ? color : null}
              >
                dzieciom
              </li>
              <li
                className="choose-reciever__list-element"
                onClick={handleSelect}
                style={reciever.includes("samotnym matkom") ? color : null}
              >
                samotnym matkom
              </li>
              <li
                className="choose-reciever__list-element"
                onClick={handleSelect}
                style={reciever.includes("bezdomnym") ? color : null}
              >
                bezdomnym
              </li>
              <li
                className="choose-reciever__list-element"
                onClick={handleSelect}
                style={reciever.includes("niepełnosprawnym") ? color : null}
              >
                niepełnosprawnym
              </li>
              <li
                className="choose-reciever__list-element"
                onClick={handleSelect}
                style={reciever.includes("osobom starszym") ? color : null}
              >
                osobom starszym
              </li>
            </ul>

            <h4 className="step-three__subtitle">
              {" "}
              Wpis nazwę konkretnej organizacji (opcjonalnie)
            </h4>
            <input
              type="text"
              value={organizationName}
              className="step-three__text-input"
              onChange={handleChange}
            ></input>
          </div>

          <div className="step-three__button-container">
            <button
              className="rev-button"
              type="button"
              value={-1}
              onClick={handleClick}
            >
              Wstecz
            </button>
            <button
              className="fwd-button"
              type="button"
              value={1}
              onClick={handleClick}
            >
              Dalej
            </button>
          </div>
          {localizationError && (
            <p style={{ color: "red", position: "absolute", bottom: "-20px" }}>
              Wybierz lokalizację
            </p>
          )}
          {recieverError && (
            <p style={{ color: "red", position: "absolute", bottom: "-40px" }}>
              Wybierz odbiorcę
            </p>
          )}
        </form>
      </section>
    </>
  );
};

export { GiveStepThree };
