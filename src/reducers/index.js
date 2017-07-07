/**
 * Created by huyifan on 2017/7/4.
 */
import {combineReducers} from 'redux-immutable'
import login from './loginreducer'
import routes from './routes'
const appReducer = combineReducers({
    login: login,
    routes: routes
});

export default appReducer;