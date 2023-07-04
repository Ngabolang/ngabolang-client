import { FETCH_CATEGORIES, FETCH_TRIPS, FETCH_TRIP_DETAIL, USER_LOGIN } from "./actionType"
import axios from 'axios'
import Swal from 'sweetalert2'
const baseUrl = "http://localhost:3000/";
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

export const paymentGateway = (id) => {
    return async (dispatch) => {
        try {
            let { data } = await axios({
                url: this.baseurl + `/generate-midtrans/${id}`,
                method: 'post',
                headers: {
                    access_token_app: localStorage.access_token_app
                }
            })

            let cb = await this.updateStatus(id)
            window.snap.pay(data.token, {
                onSuccess: async function (result) {
                    /* You may add your own implementation here */
                    await Swal.fire({
                        text: 'Success To Pay, Enjoy!!!',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                    cb()
                }
            })
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
                baseUrl + "customer/register", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                    // 'access_token': token
                },
                body: JSON.stringify(payload),
            }
            );
            let result = await response.json();
            if(!response.ok) throw {res:response.status,result} 
            // console.log(result);
            Swal.fire({
                icon: 'success',
                title: 'Success register user',
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
            let response = await fetch(baseUrl + `customer/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
            // console.log(response);
            let result = await response.json();
            if(!response.ok) throw {res:response.status,result} 
            localStorage.access_token = result.access_token;
            localStorage.userId = result.userId;
            localStorage.email = result.email;
            // console.log(result);
            dispatch(userLoginSuccess(result))
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

export const loginGoogleUser = (payload) => {
    return async (dispatch) => {
        // try {
        //     let response = await fetch(baseUrl + `admin/login`, {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(payload),
        //     });
        //     console.log(response);
        //     let result = await response.json();
        //     if(!response.ok) throw {res:response.status,result} 
        //     localStorage.access_token = result.access_token;
        //     localStorage.userId = result.userId;
        //     localStorage.email = result.email;
        //     dispatch(userLoginSuccess(result))
        //     Swal.fire({
        //         icon: 'success',
        //         title: 'Success logged in',
        //         showConfirmButton: false,
        //         timer: 1500
        //       })
        // } catch (error) {
        //     console.log(error);
        //     Swal.fire({
        //         icon: 'error',
        //         title: `Error ${error.res}`,
        //         text: error.result.message
        //       })
        // }
        localStorage.access_token = payload
    }
}


export const fetchTrips = () => {
    return async (dispatch) => {
        try {
            let response = await fetch(
                baseUrl + "customer/trip", {
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

export const fetchTripDetail = (id) => {
    return async (dispatch) => {
        try {
            let response = await fetch(
                baseUrl + "customer/trip-by-id/" + id, {
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

// export const fetchCategories = (payload) => {
//     const token = localStorage.access_token;
//     return async (dispatch) => {
//         try {
//             let response = await fetch(
//                 baseUrl + "admin/categories", {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'access_token': token
//                 }
//             }
//             );
//             let result = await response.json();
//             await dispatch(fetchCategoriesSuccess(result.categories))
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }


