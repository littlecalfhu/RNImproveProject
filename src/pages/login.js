/**
 * Created by huyifan on 2017/6/29.
 */
import React,{Component} from 'react'
import {TextInput,TouchableHighlight,View,Text,StyleSheet} from 'react-native'
import * as types from '../constants/LoginActions'
import {Button,Form,Input,Container,Header,Content,Item} from 'native-base'
import store from '../store/configurestore'
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            phone:''
        }
    }

    handlePress() {
        this.props.actions.getPhone(this.state.phone)
    }
    handleLoginCodePress(){
      this.props.actions.getLoginCode(this.state.phone);
    }
    showText(){
        return this.props.login.get('shoeText')?(
            <Text>login success!</Text>
        ):(null)
    }
    render(){
        return(
            <Container style={{paddingTop:50}}>
                <Content>
                    <Form>
                        <Item>
                            <Input  placeholder="请输入手机号" onChangeText={(text)=>{this.setState({phone:text})}}></Input>
                        </Item>
                        <Item>
                            <Input  placeholder="请输入验证码" onChangeText={(text)=>{this.setState({password:text})}}></Input>
                            <Button onPress={this.handleLoginCodePress.bind(this)}>
                                <Text>获取验证码</Text>
                            </Button>
                        </Item>
                        <TouchableHighlight onPress={this.handlePress.bind(this)}>
                            <Text>确定</Text>
                        </TouchableHighlight>
                        {
                            this.showText()
                        }
                    </Form>
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"flex-start",
        width:500,
    },
    textInput:{
        flex:1,
        width:500,
        height:50,
        lineHeight:50
    }
})
