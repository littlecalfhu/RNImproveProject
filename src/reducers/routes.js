/**
 * Created by huyifan on 2017/7/5.
 */
import Immutable,{Map} from 'immutable'
import {ActionConst} from 'react-native-router-flux'

const initState = Map({scene:{}})

export default function reducer(state = initState,action) {
    switch(action.type){
        case ActionConst.FOCUS:
            return state.update('scene',val => action.scene);
        case ActionConst.BACK_ACTION:
            return state.update('routeType',val => action.type);
        default:
            return state.update('routeType',val => action.type);
    }
}