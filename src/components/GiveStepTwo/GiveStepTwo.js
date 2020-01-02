import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import {GiveStepTwoList} from '../GiveStepTwo/GiveStepTwoLisit/GiveStepTwoList'


const  GiveStepTwo = () => {
    const dispatch = useDispatch()
    const step = useSelector(state => state.currentStep)
    
    

    const handleClick = (e) => {
        dispatch({
           
                type: "CURRENT_STEP",
                payload  : {
                 currentStep: +step.currentStep + parseInt(e.currentTarget.value)
                }          
        })    
    }

  
    return (
        <>
        <section className="StepTwoSec">
            <form className="StepTwoForm">
                <p className="StepCounter">Krok 2/4</p> 
                <h3 className="StepTwoTitle">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
               < div className="selectGroup">
                   
                <GiveStepTwoList/>
                </ div>

               <div>
               <button  className="revButton" type="button" value={-1} onClick={handleClick}>Wstecz</button>

               <button  className="fwdButton" type="button" value={1} onClick={handleClick}>Dalej</button>
                
               </div>
                
            </form>

            
            

        </section>

        

        </>
    )
}

export {GiveStepTwo}