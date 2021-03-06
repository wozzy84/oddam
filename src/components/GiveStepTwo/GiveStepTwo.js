import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GiveStepTwoList } from "../GiveStepTwo/GiveStepTwoLisit/GiveStepTwoList";
import { useState } from "react";

const GiveStepTwo = () => {
  const dispatch = useDispatch();
  const step = useSelector(state => state.currentStep);
  const bags = useSelector(state => state.bags);
  const [error, setError] = useState(false);
  const handleClick = e => {
    if (typeof bags.bags === "number" || e.currentTarget.value == "-1") {
      dispatch({
        type: "CURRENT_STEP",
        payload: {
          currentStep: +step.currentStep + parseInt(e.currentTarget.value)
        }
      });
    } else {
      setError(true);
    }
  };

  const handlePass = e => {
    setError(e);
  };

  return (
    <>
      <section className="step-two__section">
        <form className="step-two__form">
          <p className="step-counter">Krok 2/4</p>
          <h3 className="step-two__title">
            Podaj liczbę 60l worków,
            <br />w które spakowałeś/aś rzeczy:
          </h3>
          <div className="step-two__select-group">
            <GiveStepTwoList pass={handlePass} />
          </div>

          <div className="step-two_button-container">
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
          {error && (
            <p style={{ color: "red", position: "absolute", bottom: "-30px" }}>
              Podaj liczbę worków
            </p>
          )}
        </form>
      </section>
    </>
  );
};

export { GiveStepTwo };
