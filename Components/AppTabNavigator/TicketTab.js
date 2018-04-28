import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl
} from 'react-native'

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base'
import CardComponent from '../CardComponent'

class TicketTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="mail" style={{ color: tintColor }} />
    )
  }

  constructor (props) {
    super(props)
    this.state = {
      refreshing: false
    }
  }

  onRefresh = () => {
    this.setState({ refreshing: true })
    setTimeout(() => {
      this.setState({ refreshing: false })
    }, 2000);
  }

  render () {
    return (
      <Container style={styles.container}>

        <Header style={{ backgroundColor: 'white' }}>
          <Left><Icon name="funnel" style={{ paddingLeft: 10 }}></Icon></Left>
          <Body style={{ justifyContent: 'center' }}><Text style={{ fontSize: 18 }}>Hasta Hakları</Text></Body>
          <Right><Icon name="add-circle" style={{ paddingRight: 10 }}></Icon></Right>
        </Header>

        {/* <Content> */}
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh.bind(this)} />
            }
          >
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </ScrollView>
        {/* </Content> */}
      </Container>
    )
  }
}

export default TicketTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
