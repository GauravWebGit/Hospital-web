import { all } from "redux-saga/effects";
import {watchAuth} from "./Auth.saga";

export function* rootsaga(){
    yield all([watchAuth()]);
}