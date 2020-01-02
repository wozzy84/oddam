import React from 'react';
import { useSelector, useDispatch} from 'react-redux'


const  GiveStepOne = () => {

  
    const dispatch = useDispatch()
    const step = useSelector(state => state.currentStep)
    
    const option = useSelector(state => state.selectedOption)

   
    
    
    const handleOptionChange = (e) =>{
        dispatch({
            type:"SELECTED_OPTION",
            payload :{
             selectedOption: e.currentTarget.value
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
                        <input name="StepOneRadio" className="StepOneRadio" type="radio" id="SteoOneRadio1"  value="option1"  checked={option.selectedOption==="option1"}onChange={handleOptionChange}>
                        </input>
                        <label htmlFor="SteoOneRadio1" >ubranina, które nadają się do ponownego użycia</label>
                    </li>
                    <li className="radioElement">                    
                        <input name="StepOneRadio" className="StepOneRadio" type="radio" id="SteoOneRadio2" value="option2"  checked={option.selectedOption==="option2"}onChange={handleOptionChange}></input>
                        <label htmlFor="SteoOneRadio2">ubrania do wyrzucenia</label>
                    </li>
                   <li className="radioElement">
                        <input name="StepOneRadio" className="StepOneRadio" type="radio" id="SteoOneRadio3" value="option3"  checked={option.selectedOption==="option3"}onChange={handleOptionChange}></input>
                        <label htmlFor="SteoOneRadio3">zabawki</label>   
                    </li>
                    <li className="radioElement">
                        <input name="StepOneRadio" className="StepOneRadio" type="radio" id="SteoOneRadio4" value="option4"  checked={option.selectedOption==="option4"}onChange={handleOptionChange}></input>
                        <label htmlFor="SteoOneRadio4">ksiązki</label>
                    </li>
                    <li className="radioElement">
                        <input name="StepOneRadio" className="StepOneRadio" type="radio" id="SteoOneRadio5" value="option5"  checked={option.selectedOption==="option5"}onChange={handleOptionChange}></input>
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