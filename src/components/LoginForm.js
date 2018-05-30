import React, { Component } from 'react';
//import { View, Text } from 'react-native';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
state = { text: '' };

  render() {
    return (
      <Card>

        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>

      <CardSection />

      <CardSection>
        <Button>
          Log In
        </Button>
      </CardSection>

    </Card>

    );
  }
}

export default LoginForm;
