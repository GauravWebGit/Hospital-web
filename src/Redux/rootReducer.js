import { combineReducers } from "redux";
import { alertReducer } from "./Reducer/reducer.alert";
import { reducerAuth } from "./Reducer/reducer.auth";



export const rootReducer = combineReducers({
      auth:reducerAuth,
      alert:alertReducer
})