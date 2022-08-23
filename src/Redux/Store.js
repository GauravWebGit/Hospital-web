import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import mySaga from '../Saga/Auth.saga'
import { rootReducer } from './rootReducer'


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [thunk,sagaMiddleware]
// mount it on the Store
export const store = createStore(
  rootReducer,
  applyMiddleware(...middleware)
)

// then run the saga
sagaMiddleware.run(mySaga)

// render the application