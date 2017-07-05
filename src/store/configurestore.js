/**
 * Created by huyifan on 2017/6/29.
 */
import {applyMiddleware,createStore,compose} from 'redux'
import thunk from 'redux-thunk'
import Immutable from 'immutable'
import appReducer from '../reducers'
const initState =Immutable.Map();
const store = createStore(appReducer,initState,applyMiddleware(thunk));
export default store;
