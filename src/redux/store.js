import { createStore, combineReducers, applyMiddleware} from "redux"
import logger from "redux-logger"
import {loggedUser, selectedOption, bags, Localization, reciever, organizationName} from './reducers'
import {currentStep} from './reducers'




const reducers = combineReducers({
    loggedUser:loggedUser,
    currentStep: currentStep,
    selectedOption: selectedOption,
    bags: bags,
    Localization:Localization,
    reciever: reciever,
    organizationName: organizationName
 
  })

//store
const store = createStore(reducers, applyMiddleware(logger))

export { store }