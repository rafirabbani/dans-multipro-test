import { AUTH_LOGIN_REQ, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL, 
         AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAIL } from '../Contants/AuthConstant'

const authReducer = ( state = {}, action) => {
    switch (action.type) {
        case AUTH_LOGIN_REQ:
            return { loading: true, isLoggedIn: false }
        case AUTH_LOGIN_SUCCESS:
            return { loading: false, isLoggedIn: true, id: action.payload.id }
        case AUTH_LOGIN_FAIL:
            return { loading: false, isLoggedIn: false, error: action.payload }
        case AUTH_LOGOUT_SUCCESS:
            return { loading: false, message: action.payload }
        case AUTH_LOGOUT_FAIL:
            return { loading: false, message: action.payload }
        default:
            return state
    }
}

export default authReducer