/**
 * Created by huyifan on 2017/6/29.
 */
import * as types from '../constants/LoginActions'
import {Map} from 'immutable'

const initialState = Map({
    phone:'',
    codeValue:''
})
export default function login(state = initialState,action) {
    switch (action.type){
        case types.RETURN_CODE :
            return state.updateIn(['codeValue'],val =>action.value);
        case types.GET_PHONE:
            return state.updateIn(['phone'],val=>action.phone);
        default:
            return state
    }

}
