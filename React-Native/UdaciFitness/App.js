import React, { Component } from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native';
import AddEntry from './components/AddEntry'

export default class App extends Component {
  handlePress = () => {
    alert('Hello!')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.btn} onPress={this.handlePress} underlayColor='#d4271b'>
          <Text style={styles.btnText}>Touchable Highlight</Text>
        </TouchableHighlight>

        <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
          <Text style={styles.btnText}>Touchable Opacity</Text>
        </TouchableOpacity>

        <TouchableWithoutFeedback onPress={this.handlePress}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Touchable Without Feedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Touchable Native Feedback</Text>
            </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  btnText: {
    color: '#fff'
  }
});