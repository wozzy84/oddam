import { createStore, combineReducers, applyMiddleware} from "redux"
import logger from "redux-logger"
import {loggedUser, selectedOption, bags, Localization, reciever, organizationName, controledForm, DataPicker} from './reducers'
import {currentStep} from './reducers'





const reducers = combineReducers({
    loggedUser:loggedUser,
    currentStep: currentStep,
    selectedOption: selectedOption,
    bags: bags,
    Localization:Localization,
    reciever: reciever,
    organizationName: organizationName,
    controledForm: controledForm,
    data: DataPicker
  
 
  })

//store
const store = createStore(reducers, applyMiddleware(logger))

export { store }