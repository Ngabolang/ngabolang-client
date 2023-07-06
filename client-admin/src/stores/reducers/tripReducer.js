import {
  TRIPS_FETCH_ALL,
  TRIPS_FETCH_COMPLETE,
  TRIP_FETCH_DEST,
  TRIP_FETCH_DETAIL,
  TRIP_FETCH_INFOCHAT,
} from "../actions/actionType";

const initState = {
  trips: [],
  trip: {},
  dest: [],
  infoChat: {},
  comTrips: [],
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
    case TRIP_FETCH_INFOCHAT:
      return {
        ...state,
        infoChat: action.payload,
      };
    case TRIPS_FETCH_COMPLETE:
      return {
        ...state,
        comTrips: action.payload,
      };
    default:
      return state;
  }
}
