import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import {GiveStepThreeList} from './GiveStepThreeLisit/GiveStepThreList'
import {useState} from 'react'
import { taggedTemplateExpression } from '@babel/types';


const  GiveStepThree = () => {
    const dispatch = useDispatch()
    const step = useSelector(state => state.currentStep)   
    const reciever = useSelector(state => state.reciever)   
    const organizationName= useSelector(state=>state.organizationName)
    const localization = useSelector (state=>state.Localization)
    const [localizationError, setLocalizationError]=useState(false);
    const [recieverError, setRecieverError]=useState(false)
    

    const handleClick = (e) => {
       
        if (reciever.length && localization.Localization!="wybierz") {
    
          dispatch({
           
                type: "CURRENT_STEP",
                payload  : {
                 currentStep: +step.currentStep + parseInt(e.currentTarget.value)
                }          
        })    
    }
    if (!reciever.length){
        setRecieverError(true);
        
    } 
    if(localization.Localization=="wybierz") {
        setLocalizationError(true)
   
    }
        }
        

    const handleSelect = (e) => {
        
        dispatch({
            
            type:"SELECT_RECIEVER",
            payload: {
                currentReciever: e.currentTarget.innerText
            }
        })
        setRecieverError(false)
    }

    const handleChange = (e) => {
      
        dispatch ({
            type: "TYPE_ORGANIZATION",
            organizationName: e.currentTarget.value

         })

    }

    const handlePass = (e) => {
        setLocalizationError(e)
    }
 
    return (
        <>
        <section className="StepThreeSec">
            <form className="StepThreeForm">
                <p className="StepCounter">Krok 3/4</p> 
                <h3 className="StepThreeTitle">Lokalizacja:</h3>
                <GiveStepThreeList pass={handlePass}/>
                <div>
                   <h4 className="StepThreeSubTitle"> Komu chcesz  pomóc?</h4>
                <ul className="ChooseRecieverList">
                    <li className="ChooseRecieverElement" onClick={handleSelect} style={reciever.includes("dzieciom") ? {backgroundColor:"yellow"}: null}>dzieciom</li>
                    <li className="ChooseRecieverElement" onClick={handleSelect} style={reciever.includes("samotnym matkom") ? {backgroundColor:"yellow"}: null}>samotnym matkom</li>
                    <li className="ChooseRecieverElement" onClick={handleSelect} style={reciever.includes("bezdomnym") ? {backgroundColor:"yellow"}: null}>bezdomnym</li>
                    <li className="ChooseRecieverElement" onClick={handleSelect} style={reciever.includes("niepełnosprawnym") ? {backgroundColor:"yellow"}: null}>niepełnosprawnym</li>
                    <li className="ChooseRecieverElement" onClick={handleSelect} style={reciever.includes("osobom starszym") ? {backgroundColor:"yellow"}: null}>osobom starszym</li>
                </ul> 
                </div>
                
                <div>
                <h4 className="StepThreeSubTitle"> Wpis nazwę konkretnej organizacji (opcjonalnie)</h4>
                <input type="text"  value={organizationName} className="TextInputStepThree" onChange={handleChange}></input>
                </div>
                
               <div>
                   
                    {localizationError && <p style={{color:"red", marginBottom: "20px"}}>Wybierz lokalizację</p>}
                    {recieverError && <p style={{color:"red"}}>Wybierz odbiorcę</p>}
               </div>
               <div>
               <button  className="revButton" type="button" value={-1} onClick={handleClick}>Wstecz</button>

               <button  className="fwdButton" type="button" value={1} onClick={handleClick}>Dalej</button>
                
               </div>
              
            </form>

        </section>

        

        </>
    )
}

export {GiveStepThree}