import { combineReducers } from "redux";
import postReducer from "./Reducers";

export default combineReducers({
  posts: postReducer,
});
