import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { checkServerIdentity } from 'tls';


const  GiveStepOne = () => {

  
    const dispatch = useDispatch()
    const step = useSelector(state => state.currentStep)
    
    const option = useSelector(state => state.selectedOption)

    const handleOptionChange = (e) =>{
        dispatch({
            type:"SELECTED_OPTION",
            payload :{
             selectedOption: e.currentTarget.value,
             optionDescription: e.currentTarget.dataset.description,
             checked: e.currentTarget.checked
            }
            
        })
    }
    


    const handleClick = () => {
        dispatch({
           
                type: "CURRENT_STEP",
                payload  : {
                 currentStep: step.currentStep+1
                }

                
        })

              
    }

    return (
        <>
        <section className="StepOneSec">
            <form className="StepOneForm">
                <p className="StepCounter">Krok 1/4</p> 
                <h3 className="StepOneTitle">Zaznacz co chcesz oddać:</h3>
                <ul className="radioList">  
                    <li className="radioElement">
                        <input name="StepOneRadio1" data-description="ubranina, które nadają się do ponownego użycia" checked = {option.some(e => e.selectedOption === 'option1')} className="StepOneRadio" type="checkbox" id="SteoOneRadio1"  value="option1"  onChange={handleOptionChange}>
                        </input>
                        <label htmlFor="SteoOneRadio1">ubranina, które nadają się do ponownego użycia</label>
                    </li>
                    <li className="radioElement">                    
                        <input name="StepOneRadio2" data-description="ubrania do wyrzucenia" checked = {option.some(e => e.selectedOption === 'option2')} className="StepOneRadio" type="checkbox" id="SteoOneRadio2" value="option2"   onChange={handleOptionChange}></input>
                        <label htmlFor="SteoOneRadio2">ubrania do wyrzucenia</label>
                    </li>
                   <li className="radioElement">
                        <input name="StepOneRadio3" data-description="zabawki" checked = {option.some(e => e.selectedOption === 'option3')} className="StepOneRadio" type="checkbox" id="SteoOneRadio3" value="option3" onChange={handleOptionChange}></input>
                        <label htmlFor="SteoOneRadio3">zabawki</label>   
                    </li>
                    <li className="radioElement">
                        <input name="StepOneRadio4" data-description="ksiązki" checked = {option.some(e => e.selectedOption === 'option4')} className="StepOneRadio" type="checkbox" id="SteoOneRadio4" value="option4" onChange={handleOptionChange}></input>
                        <label htmlFor="SteoOneRadio4">ksiązki</label>
                    </li>
                    <li className="radioElement">
                        <input name="StepOneRadio5" data-description="inne" checked = {option.some(e => e.selectedOption === 'option5')} className="StepOneRadio" type="checkbox" id="SteoOneRadio5" value="option5"  onChange={handleOptionChange}></input>
                        <label htmlFor="SteoOneRadio5">inne</label>
                    </li>                  
                </ul>
                <button  className="fwdButton" type="button" onClick={handleClick}>Dalej</button>
                
            </form>

            
            

        </section>

        

        </>
    )
}

export {GiveStepOne}

// checked={option.selectedOption==="option1"}