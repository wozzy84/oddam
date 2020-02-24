import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

const  GiveSummary = () => {
    const dispatch = useDispatch()   
    const step = useSelector(state => state.currentStep)
    const localization = useSelector(state => state.Localization.Localization)
    const bags = useSelector(state => state.bags.bags)
    const controledForm = useSelector(state=>state.controledForm)
    const option = useSelector(state => state.selectedOption)
    const recievers = useSelector(state=>state.reciever)
    const data = useSelector(state=>state.data)
    
    const {handleSubmit} = useForm()

    const onSubmit = () => { 
        dispatch({   
            type: "CURRENT_STEP",
            payload: {
                currentStep: step.currentStep+1
            }          
        })
    }

    const handleClick = (e) => {
        dispatch({           
            type: "CURRENT_STEP",
            payload: {
                currentStep: +step.currentStep + parseInt(e.currentTarget.value)
            }          
        })    
    }
    const handleBags = (e) => {
        switch(e) {
            case 1:
            return "worek, "
            case 2: 
            case 3:
            case 4:
            return "worki, "
            case 5:
            return "worków, " 
        }
    } 

    return (
        <>
        <section className="summary__section">
            <form className="summary__form" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="summary__title">Podsumowanie Twojej darowizny</h3>        
                <div className="summary-brief__container">
                    <h5 className="summary-brief__title">Oddajesz:</h5>
                    <p className="summary-brief__details"><span className="shirt-icon"></span>{bags} {handleBags(bags)}{option.map(e=> e.optionDescription +', ')} {recievers.map(e=> e+", ")} </p>
                    <p className="summary-brief__details"><span className="circle-icon"> </span>dla lokalizacji: {localization}</p>
                </div>      
                <div className="summary__wrapper">
                    <div className="summary__column">
                        <h4>Adres odbioru:</h4>
                        <div className="summary__input-group">
                            <p className="summary__label">Ulica</p>
                            <p className="summary__description">{controledForm.street}</p>
                        </div>                     
                        <div className="summary__input-group">
                            <p className="summary__label">Miasto</p>
                            <p className="summary__description">{controledForm.city}</p>  
                        </div>
                        <div className="summary__input-group">
                            <p className="summary__label">Kod pocztowy</p>
                            <p className="summary__description">{controledForm.zipCode} </p>
                        </div> 
                        <div className="summary__input-group">
                            <p className="summary__label">Numer telefonu  </p>
                            <p className="summary__description">{controledForm.phone}</p>
                        </div>
                    </div>
                    <div className="summary__column">
                        <h4>Termin odbioru:</h4>
                        <div className="summary__input-group">
                            <p className="summary__label">Data</p>
                            <p className="summary__description">{data.toLocaleDateString()}</p>
                        </div>
                        <div className="summary__input-group">
                            <p className="summary__label">Godzina</p>
                            <p className="summary__description">{controledForm.recieveHour}</p>
                        </div>                       
                        <div className="summary__input-group">
                            <p className="summary__label">Uwagi dla kuriera</p>
                            <p className="summary__description">{controledForm.remarks}</p>    
                        </div>
                    </div>               
                </div>    
                <div className="summary__button-container">
                    <button  className="rev-button" type="button" value={-1} onClick={handleClick}>Wstecz</button>
                    <button  className="fwd-button" type="submit" value={0} onClick={handleClick}>Potwierdzam</button> 
                </div>

            </form>
        </section>
        </>
    )   
}


export {GiveSummary}
