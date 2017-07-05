/**
 * Created by huyifan on 2017/6/28.
 */
import React,{Component} from 'react'
import {Animated} from 'react-native'

export default class Myanimated extends Component{
    constructor(props){
        super(props);
        this.state={
            fadeAnim :new Animated.Value(0),
        }
    }
    componentDidMount(){
        Animated.timing(
            this.state.fadeAnim,{
                toValue:1
            }
        ).start();
    }
    render(){
        return(
            <Animated.View style={{
                ...this.props.style,
                opacity:this.state.fadeAnim,
            }}>
                {this.props.children}
            </Animated.View>
        );
    }
}