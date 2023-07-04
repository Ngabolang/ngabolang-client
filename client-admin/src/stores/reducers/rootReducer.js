import { combineReducers } from "redux";
import tripReducer from "./tripReducer";
import categoryReducer from "./categoryReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  trip: tripReducer,
  category: categoryReducer,
  user: userReducer,
});

export default rootReducer;
