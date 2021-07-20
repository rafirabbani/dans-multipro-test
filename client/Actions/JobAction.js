import Axios from 'axios'
import { GET_ALL_JOBS_REQ, GET_ALL_JOBS_SUCCESS, GET_ALL_JOBS_FAIL, FIND_JOBS_REQ, FIND_JOBS_SUCCESS,
         FIND_JOBS_FAIL } from '../Contants/JobConstant'

const getAllJobs = () => async (dispatch) => {
    dispatch({ type: GET_ALL_JOBS_REQ })
    const token = `Bearer ${JSON.parse(localStorage.getItem('token')).token}`
    try {
        const result = await Axios.get(`/api/jobs/all`, { headers: {
            Authorization: token
        }})
        dispatch({ type: GET_ALL_JOBS_SUCCESS, payload: result.data })
    }   
    catch (err) {
        dispatch({ type: GET_ALL_JOBS_FAIL, payload: err.response.data })
    }
}

export default {
    getAllJobs
}