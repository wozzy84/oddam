import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { useForm } from 'react-hook-form'
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import pl from 'date-fns/locale/pl';
import "react-datepicker/dist/react-datepicker.css";

registerLocale('pl', pl)

const  GiveStepFour = (props) => {
    const dispatch = useDispatch()   
    const step = useSelector(state => state.currentStep)
    const controledForm = useSelector(state=>state.controledForm)
    const { register, handleSubmit, watch, errors, control } = useForm()
    const errorBorder = {border: "1px solid  #D8000C", outline: "none"}
    const errorMsg = {color: "#D8000C", fontSize: "20px"}
    const data = useSelector(state=>state.data)
    
    const handleChangeDate = (e) => {
        dispatch ({
            type: 'DATE_PICKER',
            date: e
        })  
    }
    
    const onSubmit = (data) => { 
        dispatch({      
            type: "CURRENT_STEP",
            payload  : {
            currentStep: +step.currentStep+1
            }          
        })    
    }
    
    const handleChange = (e) => {
        switch (e.currentTarget.name){
            case "street":
            dispatch({
                type: 'STREET',
                street:  e.currentTarget.value
            })
            break
            case "city":
            dispatch({
                type: "CITY",
                city:  e.currentTarget.value
            })
            break
            case "zipCode":                   
                     dispatch({
                type: 'ZIP_CODE',
                zipCode:  e.currentTarget.value
            })
            break
            case "phone":
            dispatch({
                type: 'PHONE',
                phone:  e.currentTarget.value
            })
            break
            case "recieveHour":
            dispatch({
                type: 'RECIEVE_HOUR',
                recieveHour:  e.currentTarget.value
            })
            break
            case "remarks":
            dispatch({
                type: 'REMARKS',
                remarks:  e.currentTarget.value
            })
        }
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
        <section className="step-four__section">
            <form className="step-four__form" onSubmit={handleSubmit(onSubmit)}>
                <p className="step-counter">Krok 4/4</p> 
                <h3 className="step-four__title">Podaj adres oraz termin odbioru<br/> rzeczy przez kuriera</h3>        
                <div className="step-four__form-wrapper">
                    <div className="step-four__form-column">
                        <h4>Adres odbioru:</h4>
                        <div className="step-four__input-group">
                            <label>Ulica</label>
                            <input name="street" type="text" defaultValue={controledForm.street} onChange={handleChange} ref={register ({ required:true, minLength: {value: 3} } )} style={errors.street? errorBorder: null}></input>
                        </div>                     
                        <div className="step-four__input-group">
                            <label>Miasto</label>
                            <input name="city" type="text" defaultValue={controledForm.city}  onChange={handleChange} ref={register ({ required:true, minLength: {value: 2} })} style={errors.city? errorBorder: null}></input>
                        </div>
                        <div className="step-four__input-group">
                            <label>Kod pocztowy</label>
                            <input name="zipCode"type="" defaultValue={controledForm.zipCode}  onChange={handleChange}   ref={register ({ required:true, minLength: {value: 3} })} style={errors.zipCode? errorBorder: null}></input>
                        </div> 
                        <div className="step-four__input-group">
                            <label>Numer telefonu  </label>
                            <input name="phone" type="number" defaultValue={controledForm.phone} onChange={handleChange} ref={register ({ required:true, minLength: {value: 5} })} style={errors.phone? errorBorder: null}></input>
                        </div>
                    </div>
                    <div className="step-four__form-column">
                        <h4>Termin odbioru:</h4>
                        <div className="step-four__input-group">
                            <label>Data</label>
                            <DatePicker selected={data} minDate={new Date} locale="pl"dateFormat="dd/MM/yyyy" onChange={handleChangeDate} className="date-picker"/>
                            </div>
                        <div className="step-four__input-group">
                            <label>Godzina</label>
                            <input name="recieveHour" type="text" defaultValue={controledForm.recieveHour} onChange={handleChange} placeholder={"HH:MM"}  ref={register ({ required:true, minLength: {value: 5}, pattern: /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/ })} style={errors.recieveHour? errorBorder: null}></input>    
                        </div>                       
                        <div className="step-four__input-group">
                            <label>Uwagi dla kuriera</label>
                            <textarea name="remarks" defaultValue={controledForm.remarks} onChange={handleChange} ref={register ({ maxLength: {value: 120}})} style={errors.remarks? errorBorder: null}></textarea>    
                        </div>
                    </div>               
                </div>    
                <div className="step-four__button-container">
                    <button  className="rev-button" type="button" value={-1} onClick={handleClick}>Wstecz</button>
                    <button  className="fwd-button" type="submit" value={0} data-val={1} onClick={handleClick} >Dalej</button>
                </div>
            </form>
        </section>
        </>
    )   
}


export {GiveStepFour}
