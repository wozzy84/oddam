import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger"
import {loggedUser} from './reducers'
import {currentStep} from './reducers'


const reducers = combineReducers({
    loggedUser:loggedUser,
    currentStep: currentStep
  })

//store
const store = createStore(reducers, applyMiddleware(logger))

export { store }