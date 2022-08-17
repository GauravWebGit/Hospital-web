import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import * as AT from '../Redux/ActionType'

function* SingUpSaga(action) {
   try {
    //   const user = yield call(Api.fetchUser, action.payload.userId);
      yield put({type:AT.SINGUP_USER, user: action.payload});
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* mySaga() {
  yield takeEvery(AT.SINGUP_USER, SingUpSaga);
}

function* watchAuth(){
    yield all([SingUpSaga()]);
}

export default mySaga;