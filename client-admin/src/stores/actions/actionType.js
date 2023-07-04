import {
  CAT_FETCH_ALL,
  GET_USER,
  TRIPS_FETCH_ALL,
  TRIPS_FETCH_COMPLETE,
  TRIP_FETCH_DEST,
  TRIP_FETCH_DETAIL,
  TRIP_FETCH_INFOCHAT,
} from "./actionCreator";
import axios from "axios";
const baseUrl = "http://localhost:3000/admin";

export const login = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        method: "post",
        url: baseUrl + `/login`,
        data: payload,
      });

      localStorage.access_token = data.access_token;
      await Swal.fire({
        text: "Login Success",
        icon: "success",
        confirmButtonText: "Okay",
      });
    } catch (error) {
      console.log(error);
      await Swal.fire({
        title: error.response.status,
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};

export const fetchTripSuccess = (payload) => {
  return {
    type: TRIPS_FETCH_ALL,
    payload: payload,
  };
};

export const fetchTrip = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios({
        method: "get",
        url: baseUrl + `/trip`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(fetchTripSuccess(data));
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};

//detail
export const fetchDetailTripSuccess = (payload) => {
  return {
    type: TRIP_FETCH_DETAIL,
    payload: payload,
  };
};

export const fetchDetailTrip = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await axios({
        method: "get",
        url: baseUrl + `/trip/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(fetchDetailTripSuccess(data));
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};

//info chat
export const fetchChatTripSuccess = (payload) => {
  return {
    type: TRIP_FETCH_INFOCHAT,
    payload: payload,
  };
};

export const fetchChatTrip = (chatId) => {
  return async (dispatch) => {
    try {
      let { data } = await axios({
        method: "get",
        url: baseUrl + `/chat/${chatId}`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(fetchChatTripSuccess(data));
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};

//dest
export const fetchDestTripSuccess = (payload) => {
  return {
    type: TRIP_FETCH_DEST,
    payload: payload,
  };
};

export const fetchDestTrip = (id) => {
  return async (dispatch) => {
    try {
      let { data } = await axios({
        method: "get",
        url: baseUrl + `/destination/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(fetchDestTripSuccess(data));
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};
//add new trip
export const addTrip = (payload) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "post",
        url: baseUrl + `/trip`,
        headers: {
          access_token: localStorage.access_token,
        },
        data: payload,
      });
      await dispatch(fetchTrip());
      await Swal.fire({
        text: "Success add new Trip",
        icon: "success",
        confirmButtonText: "Okay",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};
export const updateTrip = (id) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "patch",
        url: baseUrl + `/trip/${id}`,
        headers: {
          access_token: localStorage.access_token,
        },
        data: { status: false },
      });
      await dispatch(fetchComTrip());
      await Swal.fire({
        text: "Success add new Trip",
        icon: "success",
        confirmButtonText: "Okay",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};
export const fetchComTripSuccess = (payload) => {
  return {
    type: TRIPS_FETCH_COMPLETE,
    payload: payload,
  };
};

export const fetchComTrip = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios({
        method: "get",
        url: baseUrl + `/trip/close`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(fetchComTripSuccess(data));
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};
// categories
export const fetchCatSuccess = (payload) => {
  return {
    type: CAT_FETCH_ALL,
    payload: payload,
  };
};

export const fetchCat = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios({
        method: "get",
        url: baseUrl + `/category`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(fetchCatSuccess(data));
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};
//add category
export const addCat = (payload) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "post",
        url: baseUrl + `/category`,
        headers: {
          access_token: localStorage.access_token,
        },
        data: payload,
      });
      dispatch(fetchCat());
      await Swal.fire({
        text: "Success add category",
        icon: "success",
        confirmButtonText: "Okay",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};

//get current user
export const fetchUserSuccess = (payload) => {
  return {
    type: GET_USER,
    payload: payload,
  };
};

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      let { data } = await axios({
        method: "get",
        url: baseUrl + `/user`,
        headers: {
          access_token: localStorage.access_token,
        },
      });
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};

//add new admin
export const addAdmin = (payload) => {
  return async (dispatch) => {
    try {
      await axios({
        method: "post",
        url: baseUrl + `/register`,
        headers: {
          access_token: localStorage.access_token,
        },
        data: payload,
      });
      await Swal.fire({
        text: "Success add new Admin",
        icon: "success",
        confirmButtonText: "Okay",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: error.response.status,
        text: error.response.data.message,
        icon: "error",
        confirmButtonText: "ok",
      });
    }
  };
};
