import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const GiveStepOne = () => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const step = useSelector(state => state.currentStep);
  const option = useSelector(state => state.selectedOption);

  const handleOptionChange = e => {
    dispatch({
      type: "SELECTED_OPTION",
      payload: {
        selectedOption: e.currentTarget.value,
        optionDescription: e.currentTarget.dataset.description,
        checked: e.currentTarget.checked
      }
    });
    setError(false);
  };

  const handleClick = () => {
    if (option.length) {
      dispatch({
        type: "CURRENT_STEP",
        payload: {
          currentStep: step.currentStep + 1
        }
      });
    } else {
      setError(true);
    }
  };

  return (
    <>
      <section className="step-one__section">
        <form className="step-one__form">
          <p className="step-counter">Krok 1/4</p>
          <h3 className="step-one__title">Zaznacz co chcesz oddać:</h3>
          <ul className="step-one__radio-list">
            <li className="step-one__radio-list-element">
              <input
                name="StepOneRadio1"
                data-description="ubrania, które nadają się do ponownego użycia"
                checked={option.some(e => e.selectedOption === "option1")}
                className="step-one__radio"
                type="checkbox"
                id="SteoOneRadio1"
                value="option1"
                onChange={handleOptionChange}
              ></input>
              <label htmlFor="SteoOneRadio1">
                ubranina, które nadają się do ponownego użycia
              </label>
            </li>
            <li className="step-one__radio-list-element">
              <input
                name="StepOneRadio2"
                data-description="ubrania do wyrzucenia"
                checked={option.some(e => e.selectedOption === "option2")}
                className="step-one__radio"
                type="checkbox"
                id="SteoOneRadio2"
                value="option2"
                onChange={handleOptionChange}
              ></input>
              <label htmlFor="SteoOneRadio2">ubrania do wyrzucenia</label>
            </li>
            <li className="step-one__radio-list-element">
              <input
                name="StepOneRadio3"
                data-description="zabawki"
                checked={option.some(e => e.selectedOption === "option3")}
                className="step-one__radio"
                type="checkbox"
                id="SteoOneRadio3"
                value="option3"
                onChange={handleOptionChange}
              ></input>
              <label htmlFor="SteoOneRadio3">zabawki</label>
            </li>
            <li className="step-one__radio-list-element">
              <input
                name="StepOneRadio4"
                data-description="ksiązki"
                checked={option.some(e => e.selectedOption === "option4")}
                className="step-one__radio"
                type="checkbox"
                id="SteoOneRadio4"
                value="option4"
                onChange={handleOptionChange}
              ></input>
              <label htmlFor="SteoOneRadio4">ksiązki</label>
            </li>
            <li className="step-one__radio-list-element">
              <input
                name="StepOneRadio5"
                data-description="inne"
                checked={option.some(e => e.selectedOption === "option5")}
                className="step-one__radio"
                type="checkbox"
                id="SteoOneRadio5"
                value="option5"
                onChange={handleOptionChange}
              ></input>
              <label htmlFor="SteoOneRadio5">inne</label>
            </li>
          </ul>
          <button
            className="forward-button"
            type="button"
            onClick={handleClick}
          >
            Dalej
          </button>
          {error && (
            <p style={{ color: "red", position: "absolute", bottom: "-30px" }}>
              Wybierz przynajmniej jedną opcję
            </p>
          )}
        </form>
      </section>
    </>
  );
};

export { GiveStepOne };
