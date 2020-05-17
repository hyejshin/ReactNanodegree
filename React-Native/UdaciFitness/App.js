import React, { Component } from 'react';
import { 
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Slider
} from 'react-native';
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends Component {
  state = {
    value: 0
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <ScrollView style={{flex: 1}}>
          <AddEntry/>
        </ScrollView>
      </Provider>
    );
  }
}
