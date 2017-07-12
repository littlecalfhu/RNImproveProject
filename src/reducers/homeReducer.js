/**
 * Created by huyifan on 2017/7/10.
 */
import Immutable,{Map,List} from 'immutable'
import * as types from '../constants/HomeActions'
const initState = Map({
    homeMessage:'nihao'
});
export default function home(state = initState,action) {
    switch (action.type){
        case types.GET_HOME_MESSAGE :
            return state.update('homeMessage',val => action.message)
    }
}