/**
 * Created by huyifan on 2017/6/29.
 */
import React,{Component}from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Login from '../pages/login'
import ActionTypes from '../actions'
class LoginContainers extends Component{
    render(){
        return(
            <Login login={this.props.login} actions={this.props.actions} store = {this.props.store}/>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        login:state.get('login')
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        actions:bindActionCreators(ActionTypes,dispatch)
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainers);