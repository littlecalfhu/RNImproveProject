/**
 * Created by huyifan on 2017/6/27.
 */
import React,{Component} from 'react'
import {TouchableHightlight,Text,View} from 'react-native'
export default class Count extends Component{
    constructor(props){
        super(props);
        this.state = {showText:true}
        setInterval(()=>{
            this.setState(previousState =>{
                return{showText:!previousState.showText}
            })
        })
    }
    render(){
        let text = this.state.showText?this.props.text:'';
        return(
            <View>
                <Text>{text}</Text>
            </View>
        );
    }
}
Count.propTypes = {
    text:React.PropTypes.string.isRequired
}