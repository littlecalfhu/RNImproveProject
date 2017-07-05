/**
 * Created by huyifan on 2017/7/4.
 */
import {combineReducers} from 'redux-immutable'
import login from './loginreducer'
const appReducer = combineReducers({
    login: login
})

export default appReducer;