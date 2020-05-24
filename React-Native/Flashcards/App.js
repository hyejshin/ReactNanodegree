import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import Constants from 'expo-constants'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { pastelYellow, blue, summerBlue, white } from './utils/colors'
import DeckList from './components/DeckList'
import AddDeck from './components/AddDeck'
import AddCard from './components/AddCard'
import Deck from './components/Deck'
import QuizDetail from './components/QuizDetail'

function AppStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const TabNavigator = createBottomTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  AddEntry: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    }
  }
},{
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      activeTintColor: white,
      style: {
        height: 56,
        backgroundColor: summerBlue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          height: 0,
          width: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      }
  }
})

const MainNavigator = createStackNavigator({
  Home: {
    screen: TabNavigator,
  },
  EntryDetail: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: summerBlue
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: summerBlue
      }
    }
  },
  QuizDetail: {
    screen: QuizDetail,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: summerBlue
      },
    }
  },
})


const NavTabs = createAppContainer(MainNavigator)

export default class App extends Component {
  
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
          <AppStatusBar backgroundColor={summerBlue} barStyle='light-content' />
          <NavTabs />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
