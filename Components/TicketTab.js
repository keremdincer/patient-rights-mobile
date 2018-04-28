import React, { Component } from 'react'

import {
  Container,
  Header,
  Content,
  Thumbnail,
  Text,
  List,
  ListItem,
  Body,
  Left,
  Right,
  Title,
  Icon,
  Button,
  Switch,
  Spinner,
  RefreshControl,
  View
} from 'native-base';

import FAIcon from 'react-native-vector-icons/FontAwesome'

const IconStyle = {
  fontSize: 16,
  width: 16,
  textAlign: 'center'
}

const ContainerStyle = {
  marginBottom: 32
}

export default class TicketTab extends Component {

  constructor () {
    super()
    this.state = {
      tickets: [],
      isLoading: false,
      isRefreshing: false
    }
  }

  componentDidMount () {
    this.setState({ isLoading: true })
    fetch('http://172.26.0.192:3000/tickets/40')
    .then(results => results.json())
    .then(data => {
      this.setState({ isLoading: false })
      let tickets = data.map((ticket) => {
        return (
          <ListItem button icon>
            <Body>
              <Text>{ticket.patientName}</Text>
            </Body>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        )
      })

      this.setState({ tickets: tickets })
    })
  }

  _onRefresh () {
    this.setState({ isRefreshing: true })
  }

  render () {
    console.log(this.state.tickets)
    let spinner = this.state.isLoading ? 
      <Spinner color='blue' /> : <Text></Text>
    return (
        <View>
        <List>
            <ListItem itemDivider first>
              <Text>10.04.2018 (Bugün)</Text>
            </ListItem>
            {this.state.tickets}
          </List>

          {spinner}

        </View>
    )
  }
}