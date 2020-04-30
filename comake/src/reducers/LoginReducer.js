const initialState = {
    id: '',
    username: '',
    email: '',
    password: '',
    zip: '',
    isPosting: false,
    isRegistering: false
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
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                zip: action.payload.zip
            }
        case "USER_REGISTER_START":
            return {
                ...state,
                isRegistering: true
            }
        case "USER_REGISTER_SUCCESS":
            return {
                ...state,
                isRegistering: false,
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                password: action.payload.password,
                zip: action.payload.zip

            }
        default:
            return state;
    }
}