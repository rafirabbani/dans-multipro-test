import Axios from 'axios'
import { AUTH_LOGIN_REQ, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL, AUTH_LOGOUT_SUCCESS,
         AUTH_LOGOUT_FAIL } from '../Contants/AuthConstant'

const login = (data) => async (dispatch) => {
    dispatch({ type: AUTH_LOGIN_REQ })
    try {
        const result = await Axios.post(`/api/auth/login`, data)
        dispatch({ type: AUTH_LOGIN_SUCCESS, payload: {
            token: result.data.token,
            id: result.data.users.id
        }})
        localStorage.setItem('token', JSON.stringify({
            token: result.data.token,
            id: result.data.users.id
        }))
    }
    catch (err) {
        dispatch( { type: AUTH_LOGIN_FAIL, payload: err.response.data })
    }
}

const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('token')
        const result = await Axios.get('/api/auth/logout')
        dispatch({ type: AUTH_LOGOUT_SUCCESS, payload: result.data })
    }
    catch (err) {
        dispatch({ type: AUTH_LOGOUT_FAIL, payload: err.response.data })
    }
}

export default {
    login, 
    logout
}