import {
  TRIPS_FETCH_ALL,
  TRIP_FETCH_DEST,
  TRIP_FETCH_DETAIL,
} from "../actions/actionCreator";

const initState = {
  trips: [],
  trip: {},
  dest: [],
};

export default function tripReducer(state = initState, action) {
  switch (action.type) {
    case TRIPS_FETCH_ALL:
      return {
        ...state,
        trips: action.payload,
      };
    case TRIP_FETCH_DETAIL:
      return {
        ...state,
        trip: action.payload,
      };
    case TRIP_FETCH_DEST:
      return {
        ...state,
        dest: action.payload,
      };
    default:
      return state;
  }
}
