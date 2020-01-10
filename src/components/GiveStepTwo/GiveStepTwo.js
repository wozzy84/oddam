import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import {GiveStepTwoList} from '../GiveStepTwo/GiveStepTwoLisit/GiveStepTwoList'
import {useState} from 'react'


const  GiveStepTwo = () => {
    const dispatch = useDispatch()
    const step = useSelector(state => state.currentStep)
    const bags = useSelector(state => state.bags)
    const [error, setError] = useState(false)

    

    const handleClick = (e) => {
        if(typeof bags.bags === "number") {
          dispatch({
           
                type: "CURRENT_STEP",
                payload  : {
                 currentStep: +step.currentStep + parseInt(e.currentTarget.value)
                }          
        })    
        } else {
            setError(true)
        }
        
    }

    const handlePass = (e) => {
        setError(e)
        
    }
  
    return (
        <>
        <section className="StepTwoSec">
            <form className="StepTwoForm">
                <p className="StepCounter">Krok 2/4</p> 
                <h3 className="StepTwoTitle">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h3>
                <div className="selectGroup">
                   
                <GiveStepTwoList pass={handlePass}/>
                </ div>
                {error && <p style={{color:"red"}}>Podaj liczbę worków</p>}  
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