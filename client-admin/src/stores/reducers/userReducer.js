import { GET_USER } from "../actions/actionType";

const initState = {
  user: {},
};

export default function userReducer(state = initState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
}
