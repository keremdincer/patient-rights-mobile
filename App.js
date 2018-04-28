import React, { Component } from 'react';
import { Container, Body, Title, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Left, Right } from 'native-base';

import { StackNavigator } from 'react-navigation'

import MainScreen from './Components/MainScreen'

import ProfileTab from './Components/ProfileTab'
import TicketTab from './Components/TicketTab'
import SurveyTab from './Components/SurveyTab'
import CallTab from './Components/CallTab'
import Login from './Components/Login'

console.disableYellowBox = true

const AppStackNavigator = StackNavigator({
  MainScreen: {
    screen: MainScreen
  },
  // TicketScreen: {
  //   screen: TicketScreen
  // },
  // SurveyScreen: {
  //   screen: SurveyScreen
  // },
  // ProfileScreen: {
  //   screen: ProfileScreen
  // }
})

let isAuthenticated = true

export default class App extends Component {

  // renderSelectedTab () {
  //   switch (this.state.selectedTab) {
  //     case 'profile':
  //       return (<ProfileTab />);
  //       break;
  //     case 'call':
  //       return (<CallTab />);
  //       break;
  //     case 'ticket':
  //       return (<TicketTab />);
  //       break;
  //     case 'survey':
  //       return (<SurveyTab />);
  //       break;
  //     default:
  //   }
  // }

  constructor(props) {
    super(props);
    this.state = { loading: true, selectedTab: 'ticket' };
  }

  async UNSAFE_componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false });
  }

  // changeTab (tabName) {
  //   this.setState({selectedTab: tabName})
  // }

  render() {
    return (
      <AppStackNavigator />
    )
  }
}