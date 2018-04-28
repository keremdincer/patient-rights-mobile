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
  Switch
} from 'native-base';

import FAIcon from 'react-native-vector-icons/FontAwesome'

const IconStyle = {
  fontSize: 16,
  width: 16,
  textAlign: 'center'
}

export default class SurveyTab extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='funnel' />
            </Button>
          </Left>
          <Body>
            <Title>Hasta Hakları</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='add-circle' />
            </Button>
          </Right>
        </Header>

        <Content>
          <List>
            <ListItem itemDivider first>
              <Text>10.04.2018 (Bugün)</Text>
            </ListItem>
            <ListItem icon>
              <Left>
                <FAIcon style={IconStyle} name="wheelchair" />
              </Left>
              <Body>
                <Text>John Doe (Yatan hasta anketi)</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <FAIcon style={IconStyle} name="male" />
              </Left>
              <Body>
                <Text>Jane Doe (Poliklinik anketi)</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <FAIcon style={IconStyle} name="male" />
              </Left>
              <Body>
                <Text>Jack Doe (Poliklinik anketi)</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <FAIcon style={IconStyle} name="coffee" />
              </Left>
              <Body>
                <Text>Jack Doe (Kafeterya anketi)</Text>
              </Body>
            </ListItem>
          </List>
        </Content>

      </Container>
    )
  }
}