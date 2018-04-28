import React, { Component } from 'react'

import {
    Container,
    Header,
    Content,
    Thumbnail,
    Text,
    Left,
    Button,
    Icon,
    Title,
    Right,
    Body,
    Form,
    Item,
    Label,
    Input
} from 'native-base';

export default class Login extends Component {
    render () {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Hasta Hakları</Title>
                    </Body>
                </Header>

                <Content>

                    <Form>

                        <Item floatingLabel>
                            <Label>Kullanıcı Adı</Label>
                            <Input />
                        </Item>

                        <Item floatingLabel>
                            <Label>Şifre</Label>
                            <Input secureTextEntry={true} />
                        </Item>

                        <Button style={styles.submitBtn} block>
                            <Text>Giriş</Text>
                        </Button>

                    </Form>

                </Content>
            </Container>
        )
    }
}

var styles = {
    submitBtn: {
        marginTop: 32
    }
}