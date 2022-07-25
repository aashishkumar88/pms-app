import * as actions from "../constants"

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: null,
}

const Signup = (state = initialState, action) => {
    switch (action.type) {
        case actions.SIGN_UP_REQUEST:
            return {
                isLoading: true,
                isSuccess: false,
                isError: false,
            }
        case actions.SIGN_UP_SUCCESS:
            return {
                isLoading: false,
                isSuccess: true,
                isError: false,
                data: action.payload.response
            }
        case actions.SIGN_UP_ERROR:
            return {
                isLoading: false,
                isSuccess: true,
                isError: true,
            }
        default:
            return state;
    }
}
export default Signup;