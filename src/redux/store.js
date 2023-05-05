
import { combineReducers,createStore } from "redux";
import categoryReducers from "./categoryReducer";

export const rootReducer = combineReducers({
    categoryState : categoryReducers
});

export default createStore(rootReducer);