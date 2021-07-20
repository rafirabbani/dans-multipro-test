import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import JobReducer from './JobReducer'

const reducers = combineReducers({
    auth: AuthReducer,
    jobs: JobReducer
}) 

export default reducers

