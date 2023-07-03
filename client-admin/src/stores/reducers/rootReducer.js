import { combineReducers } from "redux";
import tripReducer from "./tripReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  trip: tripReducer,
  category: categoryReducer,
});

export default rootReducer;
