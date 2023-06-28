import {legacy_createStore,combineReducers,compose,applyMiddleware} from 'redux';
import AppReducers from './AppData/AppReducers';
import AuthReducer from './AuthData/AuthReducer';
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    app:AppReducers,
    auth:AuthReducer
});

const createCompose =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = legacy_createStore(rootReducer,createCompose(applyMiddleware(thunk)))

export default store;