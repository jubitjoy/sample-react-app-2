import { combineReducers } from "redux";
import scReducers from "./sc/scReducers";

let rootReucers = combineReducers({
  scData: scReducers
});

export default rootReucers;
