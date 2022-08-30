import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import { setAlert } from '../Redux/action/alert.action';
import { SignedInAction } from '../Redux/action/Auth.action';
import * as AT from '../Redux/ActionType'
import { forgotPasswdAPI, SignInAPI, signOutAPI, userApi } from './AuthAPI';

function* SingUpSaga(action) {
   try {
      const user = yield call(userApi,action.payload);
      yield put(setAlert({text:user,color:"success"}))
      // yield put({type:AT.SINGUP_USER, user: action.payload});
   } catch (e) {
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
      yield put(setAlert({text:e, color:"error"}))

   }
}

function* SignInsaga(action){
   try{
      const user = yield call(SignInAPI,action.payload);
      yield put(SignedInAction(user));
      yield put(setAlert({text:"Login in successfully",color:"success"}))
      
   }catch(e){
      console.log(e);
      // yield put({type:"USER_FETCH_FAILED",message:e.message})
      yield put(setAlert({text:e, color:"error"}))
      

   }
}

function* signOutsaga(action){
   console.log(action,"action Done");
   try{
      const user=yield call(signOutAPI,action.payload);
      console.log(user);
      yield put(setAlert({text:user,color:"success"}))
   }catch(e){
      console.log(e);
      yield put(setAlert({text:e, color:"error"}))
   }
}


function* forgotPasswd(action){
   try{
      const user = yield call(forgotPasswdAPI,action.payload);

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

function* watchlogOut(){
   yield takeEvery(AT.SIGNOUT_USER,signOutsaga)
}
function* watchForgotPasswd(){
   yield takeEvery(AT.FORGOT_PASSWORD,forgotPasswd)
}

export function* watchAuth(){
    yield all([
      watchSignup(),
      watchSignin(),
      watchForgotPasswd(),
      watchlogOut()

   ]);
}