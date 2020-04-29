const initialState = {
    id: '',
    username: '',
    password: '',
    isPosting: false
}

export const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case "USER_LOGIN_START":
            return {
                ...state,
                isPosting: true
            }
        case "USER_LOGIN_SUCCESS":
            console.log(action.payload.id)
            return {
                ...state,
                isPosting: false,
                id: action.payload.id
            }
        default:
            return state;
    }
}