/**
 * Created by huyifan on 2017/6/27.
 */
import React,{Component} from 'react'
import {Image} from 'react-native'
export default class Myimage extends Component{
    render(){
        let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
        return(
            <Image source={pic} style={{width:193,height:110}}></Image>
        );
    }
}
