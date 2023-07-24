import { FETCH_CATEGORIES, FETCH_MYTRIP, FETCH_REVIEW, FETCH_TRIPS, FETCH_TRIP_DETAIL, USER_LOGIN, BASE_URL } from "./actionType"
import axios from 'axios'
import Swal from 'sweetalert2'
// http://localhost:3000/
// https://mcd-server.jatisuryo.com/

export const fetchTripAllSuccess = (payload) => {
    return {
        type: FETCH_TRIPS,
        payload: payload
    }
}

export const fetchTripDetailSuccess = (payload) => {
    return {
        type: FETCH_TRIP_DETAIL,
        payload: payload
    }
}

export const fetchReviewSuccess = (payload) => {
    return {
        type: FETCH_REVIEW,
        payload: payload
    }
}

export const fetchCategoriesSuccess = (payload) => {
    return {
        type: FETCH_CATEGORIES,
        payload: payload
    }
}

export const userLoginSuccess = (payload) => {
    return {
        type: USER_LOGIN,
        payload: payload
    }
}

export const fetchMyTripSuccess = (payload) => {
    return {
        type: FETCH_MYTRIP,
        payload: payload
    }
}


export const paymentGateway = (tripId) => {
    return async (dispatch) => {
        try {
            let response = await fetch(
                BASE_URL + "customer/midtrans/" + tripId, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'access_token': localStorage.access_token
                },
            }
            );
            let result = await response.json();
            console.log(result);

            window.snap.pay(result.token, {
                onSuccess: async function (result) {

                    await Swal.fire({
                        text: 'Success To Pay, Enjoy!!!',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                    await dispatch(updateStatus(tripId))
                }
            })
        } catch (error) {
            console.log(error);
            await Swal.fire({
                icon: 'error',
                title: `Error ${error.res}`,
                text: error.result.message
            })
        }
    }
}

export const updateStatus = (tripId) => {
    return async (dispatch) => {
        try {
            let { data } = await axios({
                url: BASE_URL + `customer/payment/${tripId}`,
                method: 'patch',
                headers: {
                    access_token: localStorage.access_token
                }
            })

            await dispatch(fetchMyTrip())

        } catch (error) {
            console.log(error)
            Swal.fire({
                title: 'Error!',
                text: error.response.data.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
    }
}

export const registerUser = (payload) => {
    // const token = localStorage.access_token;
    return async (dispatch) => {
        try {
            let response = await fetch(
                BASE_URL + "customer/register", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    // 'access_token': token
                },
                body: JSON.stringify(payload),
            }
            );
            let result = await response.json();
            if (!response.ok) throw { res: response.status, result }
            // console.log(result);
            Swal.fire({
                icon: 'success',
                title: 'Berhasil register',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: `Error ${error.res}`,
                text: error.result.message
            })
        }
    }
}

export const loginUser = (payload) => {
    return async (dispatch) => {
        try {
            let response = await fetch(BASE_URL + `customer/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            // console.log(response);
            let result = await response.json();
            if (!response.ok) throw { res: response.status, result }
            localStorage.access_token = result.access_token;
            localStorage.id = result.id;
            localStorage.email = result.email;
            localStorage.photoProfile = result.photoProfile;
            localStorage.username = result.username;
            console.log(result);
            dispatch(userLoginSuccess(result))
            Swal.fire({
                icon: 'success',
                title: 'Akun berhasil masuk',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: `Error ${error.res}`,
                text: error.result.message
            })
        }
    }
}

export const loginGoogleUser = (payload) => {
    console.log(payload);
    return async (dispatch) => {
        try {
            let response = await fetch(BASE_URL + `customer/google-sign-in`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "google_access_token": payload
                },
            });
            // console.log(response);
            let result = await response.json();
            console.log(result);
            if (!response.ok) throw { res: response.status, result }
            localStorage.access_token = result.access_token;
            localStorage.id = result.user.id;
            localStorage.email = result.user.email;
            localStorage.photoProfile = result.user.photoProfile;
            localStorage.username = result.user.username;
            dispatch(userLoginSuccess(result.user))
            Swal.fire({
                icon: 'success',
                title: 'Success logged in',
                showConfirmButton: false,
                timer: 1500
            })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: `Error ${error.res}`,
                text: error.result.message
            })
        }
    }
}


export const fetchTrips = (category) => {
    return async (dispatch) => {
        try {
            let endpoint = "customer/trip"
            if (category) {
                endpoint = `customer/trip-by-category/${category}`
            }
            let response = await fetch(
                BASE_URL + endpoint, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            );
            let result = await response.json();
            await dispatch(fetchTripAllSuccess(result));
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchSearchTrips = (val) => {
    console.log(val);
    return async (dispatch) => {
        try {
            let response = await fetch(
                BASE_URL + "customer/trip?search=" + val, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            );
            let result = await response.json();
            console.log(result);
            await dispatch(fetchTripAllSuccess(result));
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchReview = () => {
    return async (dispatch) => {
        try {
            let response = await fetch(
                BASE_URL + 'customer/review', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            );
            let result = await response.json();
            console.log(result);
            await dispatch(fetchReviewSuccess(result));
        } catch (error) {
            console.log(error);
        }
    }
}

export const reviewUser = (id, payload) => {
    return async (dispatch) => {
        try {
            let response = await fetch(
                BASE_URL + `customer/review/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "access_token": localStorage.access_token
                },
                body: JSON.stringify(payload),
            }
            );
            await dispatch(fetchMyTrip());
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchTripDetail = (id) => {
    return async (dispatch) => {
        try {
            let response = await fetch(
                BASE_URL + "customer/trip-by-id/" + id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            );
            let result = await response.json();
            await dispatch(fetchTripDetailSuccess(result));
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchCategories = () => {
    return async (dispatch) => {
        try {
            let response = await fetch(
                BASE_URL + "customer/category", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            );
            let result = await response.json();
            await dispatch(fetchCategoriesSuccess(result))
        } catch (error) {
            console.log(error);
        }
    }
}

export const createMytrip = (id) => {
    return async (dispatch) => {
        try {
            let response = await fetch(
                BASE_URL + `customer/buy-trip/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "access_token": localStorage.access_token
                }
            }
            );
            let result = await response.json();
            if (result.message === "you are already buy this trip") {
                Swal.fire({
                    icon: 'error',
                    title: `Tidak bisa menambahkan trip yang sama`,
                })
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Berhasil menambahkan trip',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchMyTrip = () => {
    return async (dispatch) => {
        try {
            let response = await fetch(
                BASE_URL + `customer/my-trip`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "access_token": localStorage.access_token
                }
            }
            );
            let result = await response.json();
            dispatch(fetchMyTripSuccess(result))
        } catch (error) {
            console.log(error);
        }
    }
}


