import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import { setAlert } from '../Redux/action/alert.action';
import { googleSignedInAction, googleSignInAction, logedOutAction, SignedInAction } from '../Redux/action/Auth.action';
import * as AT from '../Redux/ActionType'
import { forgotPasswdAPI, googleSigninAPI, resetPasswordAPI, SignInAPI, signOutAPI, userApi } from './AuthAPI';

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

function* googleSignInsaga(action){
   try{
      const user = yield call(googleSigninAPI);
      yield put(SignedInAction(user));
      console.log(action.payload);
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
      yield put(logedOutAction())
      yield put(setAlert({text:user,color:"success"}))
   }catch(e){
      console.log(e);
      yield put(setAlert({text:e, color:"error"}))
   }
}

function* resetPasswordsaga(action){
   try{
      const user=yield call(resetPasswordAPI,action.payload);
      yield put(setAlert({text:user,color:"success"}))
   }catch(e){
      yield put(setAlert({text:e,color:"error"}))
   }
}

function* watchSignup() {
  yield takeEvery(AT.SINGUP_USER, SingUpSaga);
}

function* watchSignin(){
   yield takeEvery(AT.SINGIN_USER,SignInsaga)
}

function* watchGoogleSignin(){
   yield takeEvery(AT.GOOGLE_SIGN_USER,googleSignInsaga)
}

function* watchlogOut(){
   yield takeEvery(AT.SIGNOUT_USER,signOutsaga)
}
function* watchResetPassword(){
   yield takeEvery(AT.RESET_PASSWORD,resetPasswordsaga)
}
export function* watchAuth(){
    yield all([
      watchSignup(),
      watchSignin(),
      watchlogOut(),
      watchGoogleSignin(),
      watchResetPassword()
   ]);
}