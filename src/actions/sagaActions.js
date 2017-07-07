/**
 * Created by huyifan on 2017/7/7.
 */
import * as types from '../constants/LoginActions'

export function getPhone(phone) {
    return async (dispatch,getState) =>{dispatch({type: types.GET_PHONE, phone:phone})}
}
export function getLoginCode(phone) {
    return {type:types.GET_LOGIN_CODE,phone:phone,key:1}
}
