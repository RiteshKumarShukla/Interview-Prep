
import reducer from './reducer';

import {legacy_createStore,compose} from "redux";
const composer= window.__REDUX_DEVTOOLS_EXTENSION__ || compose
const createStore = legacy_createStore(reducer,composer());

export default createStore;
