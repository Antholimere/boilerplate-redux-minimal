import { combineReducers }        from "redux";

import uiReducer                  from "./uiReducer";
import demoReducer               from "./demoReducer";

export default combineReducers({
    ui: uiReducer,
    demo: demoReducer
});