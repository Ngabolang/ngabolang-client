import { FETCH_CATEGORIES,FETCH_TRIPS,FETCH_TRIP_DETAIL,USER_LOGIN } from "./actionType"
// import multer from 'multer'

const baseUrl = "https://mcd-server.jatisuryo.com/";
// http://localhost:3000/
// https://mcd-server.jatisuryo.com/

// import Swal from 'sweetalert2'

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

export const registerUser = (payload) => {
    // const token = localStorage.access_token;
    return async (dispatch) => {
        console.log(payload);
        dispatch(userLoginSuccess(payload))
        // try {
        //     let response = await fetch(
        //         baseUrl + "admin/register", {
        //         method: 'post',
        //         headers: {
        //             'Content-Type': 'application/json',
        //             // 'access_token': token
        //         },
        //         body: JSON.stringify(payload),
        //     }
        //     );
        //     let result = await response.json();
        //     if(!response.ok) throw {res:response.status,result} 
        //     // console.log(result);
        //     Swal.fire({
        //         icon: 'success',
        //         title: 'Success register user',
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
    }
}

export const base65=(data)=>{
    console.log(data);
}


// export const fetchMenus = () => {
//     const token = localStorage.access_token;
//     return async (dispatch) => {
//         try {
//             let response = await fetch(
//                 baseUrl + "admin/item", {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'access_token': token
//                 }
//             }
//             );
//             let result = await response.json();
//             await dispatch(fetchMenusSuccess(result.items));
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// export const findMenu = (id) => {
//     return async (dispatch) => {
//         const token = localStorage.access_token;
//         try {
//             let response = await fetch(
//                 baseUrl + "admin/item/" + id, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'access_token': token
//                 }
//             }
//             );
//             let result = await response.json();
//             // console.log(result.item);
//             await dispatch(fetchMenuSuccess(result.item));
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// export const updateMenu = (id, payload) => {
//     const token = localStorage.access_token;
//     return async (dispatch) => {
//         // console.log(id,payload);
//         try {
//             let response = await fetch(
//                 baseUrl + "admin/item/edit/" + id, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'access_token': token
//                 },
//                 body: JSON.stringify(payload)
//             }
//             );
//             await dispatch(fetchMenus())
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Success update menu',
//                 showConfirmButton: false,
//                 timer: 1500
//               })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// export const createMenu = (payload) => {
//     const token = localStorage.access_token;
//     return async (dispatch) => {
//         try {
//             let response = await fetch(
//                 baseUrl + "admin/item/add", {
//                 method: 'post',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'access_token': token
//                 },
//                 body: JSON.stringify(payload),
//             }
//             );
//             let result = await response.json();
//             if(!response.ok) throw {res:response.status,result}
//             // console.log(result);
//             await dispatch(fetchMenus())
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Success create menu',
//                 showConfirmButton: false,
//                 timer: 1500
//               })
//         } catch (error) {
//             console.log();
//             Swal.fire({
//                 icon: 'error',
//                 title: `Error ${error.res}`,
//                 text: error.result.message
//               })
//         }
//     }
// }

// export const findCategory = (id) => {
//     const token = localStorage.access_token;
//     return async (dispatch) => {
//         try {
//             let response = await fetch(
//                 baseUrl + "admin/category/" + id, {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'access_token': token
//                 }
//             }
//             );
//             let result = await response.json();
//             // console.log(result.category);
//             if(!response.ok) throw {res:response.status,result}
//             await dispatch(categoryFindSuccess(result.category));
//         } catch (error) {
//             console.log(error);
//             Swal.fire({
//                 icon: 'error',
//                 title: `Error ${error.res}`,
//                 text: error.result.message
//               })
//         }
//     }
// }

// export const updateCategory = (id, payload) => {
//     const token = localStorage.access_token;
//     return async (dispatch) => {
//         try {
//             let response = await fetch(
//                 baseUrl + "admin/category/edit/" + id, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'access_token': token
//                 },
//                 body: JSON.stringify(payload)
//             }
//             );
//             let result = await response.json();
//             // console.log(result.category);
//             if(!response.ok) throw {res:response.status,result}
//             await dispatch(fetchCategories());
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Success update Category',
//                 showConfirmButton: false,
//                 timer: 1500
//               })
//         } catch (error) {
//             console.log(error);
//             Swal.fire({
//                 icon: 'error',
//                 title: `Error ${error.res}`,
//                 text: error.result.message
//               })
//         }
//     }
// }

// export const createCategory = (payload) => {
//     const token = localStorage.access_token;
//     return async (dispatch) => {
//         try {
//             let response = await fetch(
//                 baseUrl + "admin/category/add", {
//                 method: 'post',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'access_token': token
//                 },
//                 body: JSON.stringify(payload),
//             }
//             );
//             let result = await response.json();
//             if(!response.ok) throw {res:response.status,result} 
//             // console.log(result);
//             await dispatch(fetchCategories())
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Success create Category',
//                 showConfirmButton: false,
//                 timer: 1500
//               })
//         } catch (error) {
//             console.log(error);
//             Swal.fire({
//                 icon: 'error',
//                 title: `Error ${error.res}`,
//                 text: error.result.message
//               })
//         }
//     }
// }

// export const deleteMenu = (id) => {
//     const token = localStorage.access_token;
//     return async (dispatch) => {
//         try {
//             let response = await fetch(
//                 baseUrl + `admin/item/delete/${id}`, {
//                 method: 'delete',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'access_token': token
//                 },
//             }
//             );
//             let result = await response.json();
//             if(!response.ok) throw {res:response.status,result} 
//             // console.log(result);
//             await dispatch(fetchMenus());
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Success delete menu',
//                 showConfirmButton: false,
//                 timer: 1500
//               })
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }

// export const deleteCategory = (id) => {
//     const token = localStorage.access_token;
//     return async (dispatch) => {
//         try {
//             let response = await fetch(
//                 baseUrl + `admin/category/delete/${id}`, {
//                 method: 'delete',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'access_token': token
//                 },
//             }
//             );
//             let result = await response.json();
//             if(!response.ok) throw {res:response.status,result} 
//             // console.log(result);
//             await dispatch(fetchCategories());
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Success delete Category',
//                 showConfirmButton: false,
//                 timer: 1500
//               })
//         } catch (error) {
//             console.log(error);
//             Swal.fire({
//                 icon: 'error',
//                 title: `Error ${error.res}`,
//                 text: error.result.message
//               })
//         }
//     }
// }



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

// export const loginUser = (payload) => {
//     return async (dispatch) => {
//         try {
//             let response = await fetch(baseUrl + `admin/login`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(payload),
//             });
//             console.log(response);
//             let result = await response.json();
//             if(!response.ok) throw {res:response.status,result} 
//             localStorage.access_token = result.access_token;
//             localStorage.userId = result.userId;
//             localStorage.email = result.email;
//             dispatch(userLoginSuccess(result))
//             Swal.fire({
//                 icon: 'success',
//                 title: 'Success logged in',
//                 showConfirmButton: false,
//                 timer: 1500
//               })
//         } catch (error) {
//             console.log(error);
//             Swal.fire({
//                 icon: 'error',
//                 title: `Error ${error.res}`,
//                 text: error.result.message
//               })
//         }
//     }
// }
