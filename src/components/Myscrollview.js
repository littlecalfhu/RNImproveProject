/**
 * Created by huyifan on 2017/6/28.
 */
import React,{Component} from 'react'
import {Text,ScrollView,View,Image} from 'react-native'
export default class Myscrollview extends Component{
    constructor(props){
        super(props);
    }
    mapPropsImageSrc(){
        let images = [];
        this.props.src.map((item,number,arr)=>{
            images[images.length] = <Image source={require(item)} key={number}></Image>
        })
        console.log(images)
        return images;
    }
    render(){
        return(
            <ScrollView>
                {this.mapPropsImageSrc()}
            </ScrollView>
        );
    }
}

Myscrollview.propTypes={
    src:React.PropTypes.array.isRequired
}

