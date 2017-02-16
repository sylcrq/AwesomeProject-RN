// @flow

import React, {Component} from 'react';
import {AppRegistry, Text, StyleSheet, View, Navigator} from 'react-native'
import NavigatorDemo from './js/NavigatorDemo'

class HelloWorldApp extends Component {
    render() {
        //initialRoute指定第一个route对象
        //route对象包含了场景的信息，提供给renderScene方法渲染一个场景所需的上下文信息
        //navigator对象的push和pop方法
        //configureScene设置页面切换的动效
        return (
            <Navigator initialRoute={{
                message: '初始页面'
            }} renderScene={(route, navigator) => <NavigatorDemo message={route.message} navigator={navigator}/>} configureScene={(route) => {
                if (route.sceneConfig) {
                    return route.sceneConfig;
                }
                return Navigator.SceneConfigs.FloatFromBottom;
            }}/>
        );
    }
}

// css style
const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    }
});

//static registerComponent(appKey, getComponentFunc)
AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
