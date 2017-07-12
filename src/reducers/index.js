/**
 * Created by huyifan on 2017/7/4.
 */
import {combineReducers} from 'redux-immutable'
import login from './loginreducer'
import routes from './routes'
import home from './homeReducer'
const appReducer = combineReducers({
    login: login,
    routes: routes,
    home:home
});

export default appReducer;