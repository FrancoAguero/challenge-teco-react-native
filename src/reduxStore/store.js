import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/rootSaga'
import weatherReducer from './reducers/weatherReducer'

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({ weatherReducer })
const store = createStore( rootReducer, applyMiddleware(sagaMiddleware) )
sagaMiddleware.run(rootSaga)


export default store
