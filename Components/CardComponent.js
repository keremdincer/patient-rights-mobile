import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class CardComponent extends Component {
  render () {
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/img/profile-pic.jpg')} />
            <Body>
              <Text>Kerem Dinçer</Text>
              <Text note>28.04.2018</Text>
            </Body>
          </Left>
        </CardItem>
        {/* <CardItem>
          <Image source={require('../assets/img/only-logo.png')} style={{height: 200, width: null, flex: 1}} />
        </CardItem> */}
        {/*
        <CardItem>
           <Left>
            <Button transparent>

            Buraya atama vesaire gibi fonksiyonların butonları eklenecek.

            </Button>
          </Left> 
        </CardItem>
        */}

        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: "900" }}>Kerem Dinçer </Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, laboriosam consectetur provident maxime illum nisi obcaecati molestiae nemo! Sapiente atque nisi omnis quibusdam exercitationem dolor unde vero facere quae, molestiae inventore sequi aut ad eum id adipisci odio cupiditate molestias ipsum impedit? Explicabo repellat fugit porro quibusdam, sapiente provident quas!
            </Text>
          </Body>
        </CardItem>
      </Card>
    )
  }
}

export default CardComponent