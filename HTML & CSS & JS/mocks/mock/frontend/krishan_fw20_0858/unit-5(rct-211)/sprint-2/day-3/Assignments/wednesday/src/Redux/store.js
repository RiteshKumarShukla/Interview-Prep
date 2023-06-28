import {legacy_createStore,applyMiddleware} from 'redux';
import AuthReducer from './Auth/AuthReducer';

const customMiddlewear = (store)=>(next)=>(action)=>{
    if(typeof action === "function"){
        return action(store.dispatch)
    }
        next(action)
}

const store = legacy_createStore(AuthReducer,applyMiddleware(customMiddlewear))

export default store;