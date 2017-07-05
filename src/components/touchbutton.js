/**
 * Created by huyifan on 2017/6/28.
 */
import React,{Component} from 'react'
import {TouchableHighlight,Text} from 'react-native'
export default class Touchbutton extends Component{
    _onPressButton(){
        console.log("ahaha");
    }
    render(){
        return(
            <TouchableHighlight onPress={this._onPressButton}>
                <Text>buton</Text>
            </TouchableHighlight>
        );
    }
}