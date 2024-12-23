import { createStore, applyMiddleware, combineReducers } from 'redux'
import UserReducer from './CrudReducer';
import { thunk } from 'redux-thunk';

const getreducer = combineReducers({
    dataforset: UserReducer
})

const Store = createStore(getreducer, applyMiddleware(thunk))

export default Store    ;