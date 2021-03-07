import { combineReducers } from "redux";

import streamsReducer from "./streams";

const allReducers = combineReducers({
  streamsReducer: streamsReducer,
});

export default allReducers;
