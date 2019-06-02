import { createStore } from "redux";
import rootReducer from "./reducers/rootReducers";

let store = createStore(rootReducer);

//store.subscribe(() => console.log(store.getData()));

export default store;
