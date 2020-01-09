import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { useForm } from 'react-hook-form'


const  GiveSummary = () => {
    const dispatch = useDispatch()   
    const step = useSelector(state => state.currentStep)
    const localization = useSelector(state => state.Localization.Localization)
    const bags = useSelector(state => state.bags.bags)
    const controledForm = useSelector(state=>state.controledForm)
    const option = useSelector(state => state.selectedOption)
    const { register, handleSubmit, watch, errors, control } = useForm()
    
    const onSubmit = (data) => { console.log("hello", data)
        dispatch({   
            type: "CURRENT_STEP",
            payload  : {
                currentStep: step.currentStep+1
            }          
        })
    }

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
        <section className="StepFiveSec">
            <form className="StepFiveForm" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="StepFiveTitle">Podsumowanie Twojej darowizny</h3>        
                <div className="SummaryBriefContainer">
                    <h5 className="SummaryBriefTitle">Oddajesz:</h5>
                    <p className="SummaryBriefDetails"><span className="ShirtIcon"></span>{bags} {option.map(e=> e.optionDescription +', ')}, dzieciom</p>
                    <p className="SummaryBriefDetails"><span className="CircleIcon"> </span>dla lokalizacji: {localization}</p>
                </div>
                
               
                <div className="StepFourFormWrapper">
                    <div className="StepFiveFormColumn">
                        <h4>Adres odbioru:</h4>
                        <div className="StepFiveInputGroup">
                            <p className="SummaryLabel">Ulica</p>
                            <p className="SummaryDescription">{controledForm.street}</p>
                        </div>                     
                        <div className="StepFouruInputGroup">
                            <p className="SummaryLabel">Miasto</p>
                            <p className="SummaryDescription">{controledForm.city}</p>  
                        </div>
                        <div className="StepFouruInputGroup">
                            <p className="SummaryLabel">Kod pocztowy</p>
                            <p className="SummaryDescription">{controledForm.zipCode} </p>
                        </div> 
                        <div className="StepFouruInputGroup">
                            <p className="SummaryLabel">Numer telefonu  </p>
                            <p className="SummaryDescription">{controledForm.phone}</p>
                        </div>
                    </div>
                    <div className="StepFourFormColumn">
                        <h4>Termin odbioru:</h4>
                        <div className="StepFouruInputGroup">
                            <p className="SummaryLabel">Data</p>
                            <p className="SummaryDescription">{controledForm.recieveData}</p>
                        </div>
                        <div className="StepFouruInputGroup">
                            <p className="SummaryLabel">Godzina</p>
                            <p className="SummaryDescription">{controledForm.recieveHour}</p>
                        </div>                       
                        <div className="StepFouruInputGroup">
                            <p className="SummaryLabel">Uwagi dla kuriera</p>
                            <p className="SummaryDescription">{controledForm.remarks}</p>    
                        </div>
                    </div>               
                </div>    
                <div>
                    <button  className="revButton" type="button" value={-1} onClick={handleClick}>Wstecz</button>
                    <button  className="fwdButton" type="submit" value={0} onClick={handleClick}>Potwierdzam</button> 
                </div>

            </form>
        </section>
        </>
    )   
}


export {GiveSummary}
