/**
 * Created by huyifan on 2017/6/28.
 */
import React,{Component} from 'react'
import {TextInput,View,Text} from 'react-native'

export default class Myinput extends Component{
    constructor(props){
        super(props);
        this.state={
            text:''
        }
    }
    render(){
        return(
            <View>
                <TextInput style={{height:40,width:120}} placeholder="please input text" onChangeText={(text)=>{this.setState({text:text})}}></TextInput>
                <Text style={{padding:10,marginTop:10,fontSize:42}}>
                    {this.state.text}
                </Text>
            </View>
        )
    }
}