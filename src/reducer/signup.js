import * as actions from "../constants"

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: null,
}

const Signup = (state = initialState, action) => {
    console.log(action,"actionperform")
    console.log(action.payload,"actionpayloadddd")
    // console.log(action.payload.response,"issuccessss")
    switch (action.type) {
        case actions.SIGN_UP_REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
            }
        case actions.SIGN_UP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isError: false,
                data: action.payload.response,
               
            }
        case actions.SIGN_UP_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: true,
                message:action.payload.message,
            }
        default:
            return state;
    }
}
export default Signup;