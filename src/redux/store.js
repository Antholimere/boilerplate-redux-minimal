import reduxThunk          from "redux-thunk";
import reducers            from "./reducers/index";
import {
    loadState,
    saveState
}                          from "./localStorage";
import {
    createStore,
    applyMiddleware,
    compose
  }                        from "redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadState();

const store = createStore(
    reducers,
    persistedState,
    composeEnhancers(applyMiddleware(reduxThunk))
);

store.subscribe(() => {
    saveState(store.getState());
})

export default store;