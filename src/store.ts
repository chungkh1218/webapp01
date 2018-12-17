import {Action} from "redux"
import { createStore } from "redux";
import { combineReducers } from "redux";
import{compose} from 'redux';
import {applyMiddleware} from "redux";
import logger from 'redux-logger'
import thunk from "redux-thunk";
import { IListAppState, ListAppReducer } from "./reducer/ListReducer";

import {GetRecomAppReducer, IGetRecomAppState} from './reducer/RecomReducer'

export interface IRootState {
  applist: IListAppState;
  recomapplist:IGetRecomAppState
}

const rootReducer = combineReducers({
  applist:ListAppReducer,
  recomapplist:GetRecomAppReducer
});

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const createReduxStore = () => {
  return createStore<IRootState, Action, {}, {}>(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk),
    applyMiddleware(logger))
  );
};