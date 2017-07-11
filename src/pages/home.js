/**
 * Created by huyifan on 2017/7/10.
 */
import React,{Component} from 'react'
import {Container,Content} from 'native-base'
import {View,Text} from 'react-native'
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }
    render(){
        return(
            <Container>
                <Content>
                    <Text>
                        hello world
                    </Text>
                </Content>
            </Container>
        );
    }
}