import { CAT_FETCH_ALL } from "../actions/actionCreator";

const initState = {
  categories: [],
};

export default function categoryReducer(state = initState, action) {
  switch (action.type) {
    case CAT_FETCH_ALL:
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
}
