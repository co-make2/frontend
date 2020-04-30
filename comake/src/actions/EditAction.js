import { axiosWithAuth } from "../utils/axiosWithAuth";

export const editAction = (id) => {

    return dispatch => {
        dispatch({type: "EDIT_POST_START"});
        axiosWithAuth().get(`https://comakedatabase.herokuapp.com/api/posts/${id}`)
        .then(response => {
            console.log(response)
            dispatch({type: "CURRENTLY_EDITING_POST", payload:response.data})
        })
    }
}