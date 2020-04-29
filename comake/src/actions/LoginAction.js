// import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export const userLogin = (credentials) => {

    return dispatch => {
        dispatch({type: "USER_LOGIN_START"});
        axiosWithAuth().post('https://comakedatabase.herokuapp.com/api/users/login', credentials)
        .then(response => {
            console.log("testing:", response);
            localStorage.setItem('token', JSON.stringify(response.data.token));
            dispatch({type: "USER_LOGIN_SUCCESS", payload:response.data})
        })
    }
}