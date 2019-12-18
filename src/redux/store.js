import { createStore, combineReducers, applyMiddleware } from "redux"
import logger from "redux-logger"
import {loggedUser} from './reducers'


const reducers = combineReducers({
    loggedUser:loggedUser
  })

//store
const store = createStore(reducers, applyMiddleware(logger))

export { store }