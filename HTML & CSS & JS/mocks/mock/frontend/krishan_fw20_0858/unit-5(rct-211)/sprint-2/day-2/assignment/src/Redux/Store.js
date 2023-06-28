import { legacy_createStore,combineReducers} from 'redux';
import AuthReducer from './AuthRedux/AuthReducer';
import TodoReducer from './TodoRedux/TodoReducer';
const rootReducer = combineReducers({
    todo:TodoReducer,
    auth:AuthReducer
})
const store  = legacy_createStore(rootReducer);
export default store;