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
  {/*<Header>
        <Body>
          <Title>Hasta Hakları</Title>
        </Body>
      </Header>*/}

  <Content>
    {this.renderSelectedTab()}
  </Content>

  <Footer>
    <FooterTab>

      <Button
        active={this.state.selectedTab === 'call'}
        onPress={() => { this.changeTab('call') }}
        vertical >
        {/*<Badge><Text>2</Text></Badge>*/}
        <Icon active name="call" />
        <Text>Aramalar</Text>
      </Button>

      <Button
        active={this.state.selectedTab === 'ticket'}
        onPress={() => { this.changeTab('ticket') }}
        vertical >
        <Icon active name="mail" />
        <Text>TAKİPLER</Text>
      </Button>

      <Button
        active={this.state.selectedTab === 'survey'}
        onPress={() => { this.changeTab('survey') }}
        vertical >
        {/*<Badge ><Text>51</Text></Badge>*/}
        <Icon active name="checkbox" />
        <Text>Anketler</Text>
      </Button>

      <Button
        active={this.state.selectedTab === 'profile'}
        onPress={() => { this.changeTab('profile') }}
        vertical >
        <Icon active name="person" />
        <Text>PROFİL</Text>
      </Button>

    </FooterTab>
  </Footer>
</Container>