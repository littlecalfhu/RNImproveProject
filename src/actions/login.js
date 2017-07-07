/**
 * Created by huyifan on 2017/6/29.
 */
import * as types from '../constants/LoginActions'
import {Actions,ActionConst} from 'react-native-router-flux'
export function SubmitLogin(username,password) {
    return async (dispatch,getState) =>{
        let myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        let url = `http://localhost:3000/login?username=${username}&&password=${password}`;
        const CommonApi='http://180.76.136.238:8370/home/service/getsmsverificationcode'
        let response;
        console.log(url);
        response = await fetch(CommonApi,{
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }).catch(function (err) {
            console.log("false");
        });
        console.log(response);
        let data = response.json();
        if(data){
            let user = data.username;
            dispatch({type:types.USERNAME},user);
            dispatch({type:types.SHOW_TEXT})
        }

    }
}