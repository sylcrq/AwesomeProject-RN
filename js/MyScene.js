import React, { Component, PropTypes } from 'react';
import { View, Text, TouchableHighlight, ScrollView, Image } from 'react-native';

// This will export the component, and in turn allow other components to import it later on
export default class MyScene extends Component {
  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}</Text>

        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>

        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to go back</Text>
        </TouchableHighlight>

        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Image source={require('../res/favicon.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
      </View>
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};