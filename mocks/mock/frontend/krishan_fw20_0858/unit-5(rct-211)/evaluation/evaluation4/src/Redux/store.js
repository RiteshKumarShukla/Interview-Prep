import {legacy_createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
// NOTE: use this store variable to create a store.
const createComposer = Window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducer,createComposer(applyMiddleware(thunk)));


export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.reduxStore = store;
}
