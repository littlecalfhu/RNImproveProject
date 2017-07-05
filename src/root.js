/**
 * Created by huyifan on 2017/7/4.
 */
import {Provider} from 'react-redux'
import React,{Component} from 'react'
import store from './store/configurestore'
import {Text,View} from 'react-native'
import LoginContainer from './containers/loginContainers'
export default class Root extends Component{
    constructor(props){
        super(props);
        this.state ={
            store:store
        }
    }
    componentDidMount(){
        console.log(this.state.store.getState());
    }
    render(){
        return(
            <Provider store={this.state.store}>
                <LoginContainer/>
            </Provider>
        )
    }
}
