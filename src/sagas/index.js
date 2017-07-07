/**
 * Created by huyifan on 2017/7/7.
 */
import * as types from '../constants/LoginActions'
import {call,put,takeLatest} from 'redux-saga/effects'
const CommonApi='http://180.76.136.238:8370/home/service/getsmsverificationcode'
export function *getLoginCode(action) {
    console.log("hi")
    let login_data = {};
    login_data.mobile = action.phone;
    login_data.type = action.key;
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    var InitOption = {
        method: 'post',
        headers: myHeaders,
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify(login_data)
    };
    try{
        const response = yield fetch(CommonApi,InitOption);
        console.log(response);
        yield put({type:types.RETURN_CODE,value:response})
    }catch(err){
        console.log(err.message);
    }
}
export default function *loginCode() {
    yield takeLatest(types.GET_LOGIN_CODE,getLoginCode)
}
