import { GET_ALL_JOBS_REQ, GET_ALL_JOBS_SUCCESS, GET_ALL_JOBS_FAIL, FIND_JOBS_REQ, FIND_JOBS_SUCCESS,
    FIND_JOBS_FAIL } from '../Contants/JobConstant'

const jobReducer = (state = {}, action )  => {
    switch (action.type) {
        case GET_ALL_JOBS_REQ:
            return { loading: true }
        case GET_ALL_JOBS_SUCCESS:
            return { loading: false, jobList: action.payload }
        case GET_ALL_JOBS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export default jobReducer