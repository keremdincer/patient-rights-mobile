import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body, Button } from 'native-base'

class ProfileTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  }

  constructor (props) {
    super(props)
    this.state = {
      activeIndex: 0
    }
  }

  segmentClicked = (index) => {
    this.setState({ activeIndex: index })
  }

  renderSection = () => {
    if (this.state.activeIndex === 0) {
      return (
        <View>
          <Text>Arama Bölümü</Text>
        </View>
      )
    } else if (this.state.activeIndex === 1) {
      return (
        <View>
          <Text>Takip Bölümü</Text>
        </View>
      )
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: 'white' }}>
          <Left><Icon name="funnel" style={{ paddingLeft: 10 }}></Icon></Left>
          <Body><Text style={{ fontSize: 18 }}>Hasta Hakları</Text></Body>
          <Right><Icon name="log-out" style={{ paddingRight: 10 }}></Icon></Right>
        </Header>

        <Content>
          <View style={{ paddingTop: 10 }}>

            <View style={{ flexDirection: 'row', paddingHorizontal: 10 }}>
            
              <View style={{ flex: 1 }}>
                <Image source={require('../../assets/img/profile-pic.jpg')}
                  style={{ width: 75, height: 75, borderRadius: 37.5}}
                />
              </View>

              <View style={{ flex: 3, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text>20</Text>
                    <Text style={{fontSize: 10, color: 'grey'}}>anket</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>57</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>takip</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text>128</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>arama</Text>
                  </View>
                </View>
              </View>

            </View>

            <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Kerem Dinçer</Text>
              <Text>Bilgi İşlem Birimi | Yazılım Uzmanı</Text>
              <Text>6911</Text>
            </View>

          </View>

          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
              <Button
                transparent
                onPress={() => this.segmentClicked(0)}
                active={this.state.activeIndex === 0}
              >
                <Icon name="call"
                  style={[this.state.activeIndex === 0 ? {} : { color: 'grey' }]}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentClicked(1)}
                active={this.state.activeIndex === 1}
              >
                <Icon name="mail"
                  style={[this.state.activeIndex === 1 ? {} : { color: 'grey' }]}
                />
              </Button>
            </View>  

            {this.renderSection()}

          </View>

        </Content>
      </Container>
    )
  }
}

export default ProfileTab

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})