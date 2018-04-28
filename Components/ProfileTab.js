import React, { Component } from 'react'

import ProfilePic from "./../assets/img/profile-pic.jpg";

import {
  Container,
  Header,
  Content,
  Thumbnail,
  Text
} from 'native-base';

export default class ProfileTab extends Component {

  render () {
    return (
      <Container>
        <Content>

          <Text>PROFİL</Text>
          <Thumbnail large square source={ProfilePic} />

        </Content>
      </Container>
    )
  }
}