// @flow

import React, {Component, PropTypes} from 'react'
import {
    TouchableHighlight,
    Text,
    View,
    Navigator,
    StyleSheet,
    TouchableNativeFeedback
} from 'react-native'

class OneLineButton extends Component {
    render() {
        if (this.props.type == 1) {
            //实现native波纹点击效果，目前只支持单个<View>作为子节点（Android Only）
            return (
                <TouchableNativeFeedback onPress={this.props.onPress} background={TouchableNativeFeedback.SelectableBackground()}>
                    <View style={styles.button}>
                        <Text>{this.props.text}</Text>
                    </View>
                </TouchableNativeFeedback>
            );
        } else {
            //通用的处理点击事件
            return (
                <TouchableHighlight style={styles.button} underlayColor="#B5B5B5" onPress={this.props.onPress} onLongPress={this.props.onLongPress}>
                    <Text>{this.props.text}</Text>
                </TouchableHighlight>
            );
        }
    }
}

export default class NavigatorDemo extends Component {
    render() {
        return (
            <View>
                <Text style={styles.messageText}>{this.props.message}</Text >
                <OneLineButton text="从右向左切入页面" onPress={() => {
                    this.props.navigator.push({message: '向右关闭页面', sceneConfig: Navigator.SceneConfigs.FloatFromRight});
                }}/>
                <OneLineButton text="从下往上切入页面" onPress={() => {
                    this.props.navigator.push({message: '向下关闭页面', sceneConfig: Navigator.SceneConfigs.FloatFromBottom});
                }}/>
                <OneLineButton text="回退一页" onPress={() => {
                    this.props.navigator.pop();
                }}/>
                <OneLineButton text="回退到最后一页" onPress={() => {
                    this.props.navigator.popToTop();
                }}/>
            </View>
        );
    }
}

NavigatorDemo.propTypes = {
    message: PropTypes.string.isRequired
};

//define css styles
const styles = StyleSheet.create({
    messageText: {
        fontSize: 17,
        fontWeight: '500',
        padding: 15,
        marginTop: 50,
        marginLeft: 15
    },
    button: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth, //当前平台thin line的宽度，用于两个元素间的分割线
        borderBottomColor: '#CDCDCD'
    }
});
