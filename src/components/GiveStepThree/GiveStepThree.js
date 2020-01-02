import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import {GiveStepThreeList} from './GiveStepThreeLisit/GiveStepThreList'


const  GiveStepThree = () => {
    const dispatch = useDispatch()
    const step = useSelector(state => state.currentStep)   
    const reciever = useSelector(state => state.reciever.currentReciever)   
    const organizationName= useSelector(state=>state.organizationName)

    const handleClick = (e) => {
        dispatch({
           
                type: "CURRENT_STEP",
                payload  : {
                 currentStep: +step.currentStep + parseInt(e.currentTarget.value)
                }          
        })    
    }

    const handleSelect = (e) => {
        
        dispatch({
            
            type:"SELECT_RECIEVER",
            payload: {
                currentReciever: e.currentTarget.innerText
            }
        })
    }

    const handleChange = (e) => {
      
        dispatch ({
            type: "TYPE_ORGANIZATION",
            organizationName: e.currentTarget.value

         })
    }
 
    return (
        <>
        <section className="StepThreeSec">
            <form className="StepThreeForm">
                <p className="StepCounter">Krok 3/4</p> 
                <h3 className="StepThreeTitle">Lokalizacja:</h3>
                <GiveStepThreeList/>
                <div>
                   <h4 className="StepThreeSubTitle"> Komu chcesz  pomóc?</h4>
                <ul className="ChooseRecieverList">
                    <li className="ChooseRecieverElement" onClick={handleSelect} style={reciever==="dzieciom" ? {backgroundColor:"yellow"}: null}>dzieciom</li>
                    <li className="ChooseRecieverElement" onClick={handleSelect} style={reciever==="samotnym matkom" ? {backgroundColor:"yellow"}: null}>samotnym matkom</li>
                    <li className="ChooseRecieverElement" onClick={handleSelect} style={reciever==="bezdomnym" ? {backgroundColor:"yellow"}: null}>bezdomnym</li>
                    <li className="ChooseRecieverElement" onClick={handleSelect} style={reciever==="niepełnosprawnym" ? {backgroundColor:"yellow"}: null}>niepełnosprawnym</li>
                    <li className="ChooseRecieverElement" onClick={handleSelect} style={reciever==="osobom starszym" ? {backgroundColor:"yellow"}: null}>osobom starszym</li>
                </ul> 
                </div>
                
                <div>
                <h4 className="StepThreeSubTitle"> Wpis nazwę konkretnej organizacji (opcjonalnie)</h4>
                <input type="text"  value={organizationName} className="TextInputStepThree" onChange={handleChange}></input>
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