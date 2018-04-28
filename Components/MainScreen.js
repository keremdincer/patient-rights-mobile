import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native'

import TicketTab from './AppTabNavigator/TicketTab'
import CallTab from './AppTabNavigator/CallTab'
import SurveyTab from './AppTabNavigator/SurveyTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

import { TabNavigator } from 'react-navigation'
import { Icon } from 'native-base'

class MainScreen extends Component {

  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <AppTabNavigator />
    )
  }
}

export default MainScreen

const AppTabNavigator = TabNavigator({
  TicketTab: {
    screen: TicketTab
  },
  CallTab: {
    screen: CallTab
  },
  SurveyTab: {
    screen: SurveyTab
  },
  ProfileTab: {
    screen: ProfileTab
  }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      ...Platform.select({
        android: {
          backgroundColor: 'white'
        }
      })
    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true
  }
})
