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

export default class CallTab extends Component {
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
                <FAIcon style={IconStyle} name="check" />
              </Left>
              <Body>
                <Text>John Doe (Arandı kapandı)</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <FAIcon style={IconStyle} name="paper-plane" />
              </Left>
              <Body>
                <Text>Jane Doe (Ulaşılamadı mesaj yollandı)</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <FAIcon style={IconStyle} name="question" />
              </Left>
              <Body>
                <Text>Jack Doe (Açık)</Text>
              </Body>
            </ListItem>

            <ListItem itemDivider first>
              <Text>09.04.2018 (Dün)</Text>
            </ListItem>

            <ListItem icon>
              <Left>
                <FAIcon style={IconStyle} name="check" />
              </Left>
              <Body>
                <Text>John Doe (Arandı kapandı)</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <FAIcon style={IconStyle} name="paper-plane" />
              </Left>
              <Body>
                <Text>Jane Doe (Ulaşılamadı mesaj yollandı)</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <FAIcon style={IconStyle} name="question" />
              </Left>
              <Body>
                <Text>Jack Doe (Açık)</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <FAIcon style={IconStyle} name="check" />
              </Left>
              <Body>
                <Text>John Doe (Arandı kapandı)</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <FAIcon style={IconStyle} name="paper-plane" />
              </Left>
              <Body>
                <Text>Jane Doe (Ulaşılamadı mesaj yollandı)</Text>
              </Body>
            </ListItem>
            <ListItem icon>
              <Left>
                <FAIcon style={IconStyle} name="question" />
              </Left>
              <Body>
                <Text>Jack Doe (Açık)</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}
