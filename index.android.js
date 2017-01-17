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
  View,
  Image,
  TextInput,
  Navigator
} from 'react-native';

import MyScene from './js/MyScene'
import ListViewBasics from './js/ListViewBasics'

// Props Example
class Greeting extends Component {
  render() {
    return (
      // JSX
      <Text>Hello {this.props.name} !</Text>
      );
  }
}

// State Example
class Blink extends Component {
  constructor(props) {
    super(props);
    // initialize state in the constructor
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    let pic = {
      uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Image source={pic} style={{width: 193,height: 110}} />
        <Greeting name='Android' />
        <Greeting name='IOS' />
        <Blink text='Look at me look at me look at me' />
        <Text style={styles.bigblue}>just bigblue</Text>
        <TextInput
          style={{width: 200,height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  bigblue:{
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

class SimpleNavigationApp extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={() => {
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    )
  }
}

AppRegistry.registerComponent('AwesomeProject', () => ListViewBasics);
