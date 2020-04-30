import {axiosWithAuth} from "../utils/axiosWithAuth";

export const userRegister = (credentials) => {

    return dispatch => {
        dispatch({type: "USER_REGISTER_START"})
        axiosWithAuth().post('https://comakedatabase.herokuapp.com/api/users/register', credentials)
        .then(response => {
            console.log(response)
            localStorage.setItem('token', JSON.stringify(response.data.token));
            dispatch({type: "USER_REGISTER_SUCCESS", payload: response.data.userData})
        })
    }
}