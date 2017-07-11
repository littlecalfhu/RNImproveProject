/**
 * Created by huyifan on 2017/7/10.
 */
import * as types from '../constants/HomeActions'
export function GetHomeMessage(message) {
    return {type:types.GET_HOME_MESSAGE,message:message}
}