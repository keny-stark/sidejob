import {createBrowserHistory} from "history";
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
import {connectRouter, routerMiddleware} from "connected-react-router";

import {loadFromLocalStorage, saveToLocalStorage} from "./localStorage";


import userReducer from './reducers/userReducer';
import singboardsReducer from './reducers/singboardReducer';


export const history = createBrowserHistory();


const rootReducer = combineReducers({
    router: connectRouter(history),
    users: userReducer,
    singboards: singboardsReducer
})

const persistedState = loadFromLocalStorage();


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
    rootReducer,
    persistedState,
   composeEnhancers(applyMiddleware(thunkMiddleware, routerMiddleware(history)))
);

store.subscribe(() => {
    saveToLocalStorage({
      users: {
        user: store.getState().users.user
      }
    });
  });

export default store;