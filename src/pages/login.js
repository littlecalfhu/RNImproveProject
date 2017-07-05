/**
 * Created by huyifan on 2017/6/29.
 */
import React,{Component} from 'react'
import {TextInput,TouchableHighlight,View,Text,StyleSheet} from 'react-native'

export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        }
    }

    handlePress(){
        if(this.state.username && this.state.password){
            this.props.actions.SubmitLogin(this.state.username,this.state.password);
        }else{
            console.log('请输入用户名，密码');
        }
    }
    showText(){
        return this.props.login.get('shoeText')?(
            <Text>login success!</Text>
        ):(null)
    }
    render(){
        return(
            <View style={styles.view}>
                <Text style={styles.text}>用户名</Text>
                <TextInput onChangeText={(text)=>{this.setState({username:text})}} style={styles.textInput}></TextInput>
                <Text style={styles.text}>密码</Text>
                <TextInput onChangeText={(text)=>{this.setState({password:text})}} style={styles.textInput}></TextInput>
                <TouchableHighlight onPress={this.handlePress.bind(this)}>
                    <Text>确定</Text>
                </TouchableHighlight>
                {
                    this.showText()
                }
            </View>
        )
    }
}
const styles = StyleSheet.create({
    view:{
    },
    text:{
        width:100,
        height:50,
        marginBottom:10,
        padding:10
    },
    textInput:{
        height:50,
        width:500,
        marginBottom:10,
        padding:10
    }
})