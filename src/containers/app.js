/**
 * Created by huyifan on 2017/7/5.
 */
import {Router,Scene,Actions} from 'react-native-router-flux'
import LoginContainers from './loginContainers'
import HomeContainer from './homeContainer'
import {connect} from 'react-redux'
import React,{Component} from 'react'
const RouterWithRedux = connect()(Router);

class app extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <RouterWithRedux  hideNavBar={true}>
                <Scene hideTabBar key="login" component={LoginContainers}></Scene>
                <Scene hideTabBar key="home" component= {HomeContainer}></Scene>
            </RouterWithRedux>
        )
    }
}

export default app;