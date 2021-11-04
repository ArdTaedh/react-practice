import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleWare from 'redux-saga'

import countReducer from "./countReducer";
import userReducer from "./userReducer";
import {countWatcher} from "../saga/countSaga";
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleWare()

const rootReducer = combineReducers({
    countReducer,
    userReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)