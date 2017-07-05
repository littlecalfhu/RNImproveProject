/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Helloworld from './src/components/helloworld'
import Myimage from './src/components/image'
import Count from './src/components/count'
import Myinput from './src/components/myinput'
import Myscrollview from './src/components/Myscrollview'
import Touchbutton from './src/components/touchbutton'
import Myanimated from './src/components/Myanimated'
import Login from './src/pages/login'
import Root from './src/root'
export default class AwesomeProject extends Component {
  render() {
    let src =["./image/1.jpg","./image/2.jpg","./image/3.jpg","./image/4.jpg"]
    return (
      <View style={styles.container}>
        <Text>haha</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => Root);
