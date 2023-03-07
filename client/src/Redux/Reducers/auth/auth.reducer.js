import { SIGN_IN, SIGN_OUT, SIGN_UP, GOOGLE_AUTH } from './auth.type'
const intialState = {};

const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                ...action.payload,
            };
        case SIGN_UP:
            return {
                ...state,
                ...action.payload,
            };
        case SIGN_OUT:
            return {};
        case GOOGLE_AUTH:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return {
                ...state,
            };
    }
}
export default authReducer