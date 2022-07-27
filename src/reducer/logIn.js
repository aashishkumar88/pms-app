import * as actions from "../constants"

const initialState = {
    isLoading: false,
    isSuccess: false,
    isError: false,
    data: null,
}

const LogIn = (state = initialState, action) => {
    // console.log(action,"actionperform")
    // console.log(action.payload,"actionpayloadddd")
    switch (action.type) {
        case actions.LOG_IN_REQUEST:
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                isError: false,
            }
        case actions.LOG_IN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                isError: false,
                data: action.payload.response
            }
        case actions.LOG_IN_ERROR:
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: true,
            }
        default:
            return state;
    }
}
export default LogIn;