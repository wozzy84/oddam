import { createStore, combineReducers, applyMiddleware } from "redux";

import {
  loggedUser,
  selectedOption,
  bags,
  Localization,
  reciever,
  organizationName,
  controledForm,
  DataPicker,
  SideMenu
} from "./reducers";
import { currentStep } from "./reducers";

const reducers = combineReducers({
  loggedUser: loggedUser,
  currentStep: currentStep,
  selectedOption: selectedOption,
  bags: bags,
  Localization: Localization,
  reciever: reciever,
  organizationName: organizationName,
  controledForm: controledForm,
  data: DataPicker,
  SideMenu: SideMenu
});

//store
const store = createStore(reducers);

export { store };
