import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base'

class CallTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="call" style={{ color: tintColor }} />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: 'white' }}>
          <Left><Icon name="funnel" style={{ paddingLeft: 10 }}></Icon></Left>
          <Body><Text style={{ fontSize: 18 }}>Hasta Hakları</Text></Body>
          <Right><Icon name="add-circle" style={{ paddingRight: 10 }}></Icon></Right>
        </Header>

        <Content>
          <Text>CallTab</Text>
        </Content>
      </Container>
    )
  }
}

export default CallTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})