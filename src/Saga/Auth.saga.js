import { call, put, takeEvery, takeLatest,all } from 'redux-saga/effects'
import * as AT from '../Redux/ActionType'
import { userApi } from './AuthAPI';

function* SingUpSaga(action) {
   try {
      const user = yield call(userApi,action.payload);
      // yield put({type:AT.SINGUP_USER, user: action.payload});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watchSaga() {
  yield takeEvery(AT.SINGUP_USER, SingUpSaga);
}

export function* watchAuth(){
    yield all([watchSaga()]);
}

export default watchSaga;