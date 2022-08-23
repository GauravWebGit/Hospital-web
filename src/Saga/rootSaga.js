import {all} from './Auth.saga';

function* rootsaga(){
    yield all([watchAuth()]);
}