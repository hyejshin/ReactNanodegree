import React, { Component } from 'react';
import { 
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import AddEntry from './components/AddEntry'

export default class App extends Component {
  componentDidMount () {
    console.log('Before')
    debugger
    console.log('After')
  }
  render() {
    return (
      <View>
        <TouchableHighlight>
          
        </TouchableHighlight>
      </View>
    );
  }
}
