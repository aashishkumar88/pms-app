import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer/rootReducer";
import rootSaga from "./saga/rootSaga";

const sagaMiddleWare = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleWare)));
sagaMiddleWare.run(rootSaga);

export default Store;
