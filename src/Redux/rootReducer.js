import { combineReducers } from "redux";
import { reducerAuth } from "./Reducer/reducer.auth";



export const rootReducer = combineReducers({
      auth:reducerAuth
})