import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import * as AT from '../Redux/ActionType'
import { SignInAPI, userApi } from './AuthAPI';

function* SingUpSaga(action) {
   try {
      const user = yield call(userApi,action.payload);
      // yield put({type:AT.SINGUP_USER, user: action.payload});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* SignInsaga(action){
   try{
      const user = yield call(SignInAPI,action.payload);

   }catch(e){
      yield put({type:"USER_FETCH_FAILED",message:e.message})
   }
}

function* watchSignup() {
  yield takeEvery(AT.SINGUP_USER, SingUpSaga);
}

function* watchSignin(){
   yield takeEvery(AT.SINGIN_USER,SignInsaga)
}

export function* watchAuth(){
    yield all([
      watchSignup(),
      watchSignin()

   ]);
}