/**
 * Created by huyifan on 2017/6/29.
 */
import * as types from '../constants/LoginActions'
import {Map} from 'immutable'

const initialState = Map({
    showText:false,
    username:'',
    password:''
})
export default function login(state = initialState,action) {
    switch (action.type){
        case types.SHOW_TEXT :
            return state.updateIn(['showText'],val =>true)
        case types.USERNAME:
            return state.updateIn(['username'],val=>action.data)
        case types.PASSWORD:
            return state.updateIn(['password'],val=>action.data)
        default:
            return state
    }

}
