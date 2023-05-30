import {applyMiddleware,combineReducers,legacy_createStore,compose} from 'redux'
import reducer from './AppData/reducer';
import AuthReducer from './AuthData/AuthReducer';
import thunk from 'redux-thunk'
const createCompose =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose
const rootReducer = combineReducers({
    app:reducer,
    auth:AuthReducer,
})
 
const store = legacy_createStore(rootReducer,createCompose(applyMiddleware(thunk)) );

export default store
// window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE