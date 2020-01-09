import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux';




const  GiveStepFour = (props) => {
    const dispatch = useDispatch()   
    const step = useSelector(state => state.currentStep)
    const controledForm = useSelector(state=>state.controledForm)
    const { register, handleSubmit, watch, errors, control } = useForm()
   
    const errorBorder = {border: "1px solid  #D8000C", outline: "none"}
    const errorMsg = {color: "#D8000C", fontSize: "20px"}
    
     const onSubmit = (data) => { console.log("hello", data)
            dispatch({
                
            type: "CURRENT_STEP",
            payload  : {
                currentStep: +step.currentStep+1
            }          
})    }
    
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
            case "recieveData":
            dispatch({
                type: 'RECIEVE_DATA',
                recieveData:  e.currentTarget.value
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
        <section className="StepThreeSec">
            <form className="StepFourForm" onSubmit={handleSubmit(onSubmit)}>
                <p className="StepCounter">Krok 4/4</p> 
                <h3 className="StepThreeTitle">Podaj adres oraz termin odbioru rzecz przez kuriera</h3>        
                <div className="StepFourFormWrapper">
                    <div className="StepFourFormColumn">
                        <h4>Adres odbioru:</h4>
                        <div className="StepFouruInputGroup">
                            <label>Ulica</label>
                            <input name="street" type="text" defaultValue={controledForm.street} onChange={handleChange} ref={register ({ required:true, minLength: {value: 3} } )} style={errors.street? errorBorder: null}></input>
                        </div>                     
                        <div className="StepFouruInputGroup">
                            <label>Miasto</label>
                            <input name="city" type="text" defaultValue={controledForm.city}  onChange={handleChange} ref={register ({ required:true, minLength: {value: 2} })} style={errors.city? errorBorder: null}></input>
                        </div>
                        <div className="StepFouruInputGroup">
                            <label>Kod pocztowy</label>
                            <input name="zipCode"type="" defaultValue={controledForm.zipCode}  onChange={handleChange}   ref={register ({ required:true, minLength: {value: 3} })} style={errors.zipCode? errorBorder: null}></input>
                        </div> 
                        <div className="StepFouruInputGroup">
                            <label>Numer telefonu  </label>
                            <input name="phone" type="number" defaultValue={controledForm.phone} onChange={handleChange} ref={register ({ required:true, minLength: {value: 5} })} style={errors.phone? errorBorder: null}></input>
                        </div>
                    </div>
                    <div className="StepFourFormColumn">
                        <h4>Termin odbioru:</h4>
                        <div className="StepFouruInputGroup">
                            <label>Data</label>
                            <input name="recieveData" type="text" defaultValue={controledForm.recieveData} onChange={handleChange}  placeholder={"DD/MM/YYYY"}ref={register ({ required:true, minLength: {value: 4}, pattern: /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/})} style={errors.recieveData? errorBorder: null}></input>
                        </div>
                        <div className="StepFouruInputGroup">
                            <label>Godzina</label>
                            <input name="recieveHour" type="text" defaultValue={controledForm.recieveHour} onChange={handleChange} placeholder={"HH:MM"}  ref={register ({ required:true, minLength: {value: 5}, pattern: /^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/ })} style={errors.recieveHour? errorBorder: null}></input>    
                        </div>                       
                        <div className="StepFouruInputGroup">
                            <label>Uwagi dla kuriera</label>
                            <textarea name="remarks" defaultValue={controledForm.remarks} onChange={handleChange} ref={register ({ maxLength: {value: 120}})} style={errors.remarks? errorBorder: null}></textarea>    
                        </div>
                    </div>               
                </div>    
                <div>
                    <button  className="revButton" type="button" value={-1} onClick={handleClick}>Wstecz</button>
                    <button  className="fwdButton" type="submit" value={0} data-val={1} onClick={handleClick} >Dalej</button>
                </div>
                {errors.street && <p style={errorMsg}>Podaj adres odbioru!</p>}
                {errors.city &&  <p style={errorMsg}>Podaj miasto!</p>}
                {errors.zipCode && <p style={errorMsg}>Podaj kod pocztowy!</p>}
                {errors.phone && <p style={errorMsg}>Podaj nr telefonu!</p>}
                {errors.recieveData && <p style={errorMsg}>Niepoprawna data dostawy!</p>}
                {errors.recieveHour && <p style ={errorMsg}>Wskaż godzinę dostawy!</p>}             
                {errors.remarks && <p style ={errorMsg}>Wiadomość może mieć maksymalnie 120 znaków</p>}

            </form>
        </section>
        </>
    )   
}


export {GiveStepFour}
