import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './Reducers/IndexReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const initState = {
    auth: {
        isLoggedIn:
            typeof window !== "undefined"
            ? localStorage.getItem('token') ? true : false 
            : false,
        id:
            typeof window !== "undefined"
            ? localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')).id : null
            : null,
        
    },
}

const store = createStore(reducers, initState, composeEnhancers(applyMiddleware(thunk)))

export default store