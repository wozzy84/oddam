import { createStore, combineReducers, applyMiddleware} from "redux"
import logger from "redux-logger"
import {loggedUser, selectedOption, bags, Localization, reciever, organizationName, controledForm} from './reducers'
import {currentStep} from './reducers'
import * as updateActions from '../components/GiveStepFour/updateAction'




const reducers = combineReducers({
    loggedUser:loggedUser,
    currentStep: currentStep,
    selectedOption: selectedOption,
    bags: bags,
    Localization:Localization,
    reciever: reciever,
    organizationName: organizationName,
    controledForm: controledForm
  
 
  })

//store
const store = createStore(reducers, applyMiddleware(logger))

export { store }