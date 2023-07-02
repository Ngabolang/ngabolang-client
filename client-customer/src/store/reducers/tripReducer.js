import { FETCH_TRIPS, FETCH_CATEGORIES, FETCH_TRIP_DETAIL } from "../actions/actionType"

const initialState = {
    trips: [],
    trip: {},
    categories:[]
}
function menusReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TRIPS:
            return {
                ...state,
                trips: action.payload
            }
        case FETCH_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case FETCH_TRIP_DETAIL:
            return {
                ...state,
                trip: action.payload
            }
        default:
            return state
    }



}

export default menusReducer