const initialState = {
    isLoading: false,
    isError: false,
    userData: [],
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_USER_PENDING":
            return {
                ...state,
                isError: false,
                isLoading: true
            }
        case "LOGIN_USER_REJECTED":
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        case "LOGIN_USER_FULFILLED":
            return {
                ...state,
                userData: action.payload,
                isError: false,
                isLoading: false
            }
        default:
            return state
    }
}

export default AuthReducer