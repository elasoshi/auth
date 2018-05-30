import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';

class LoginForm extends Component {
state = { text: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { text, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(text, password)
      .then(this.onSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(text, password)
          .then(this.onSuccess.bind(this))
          .catch(this.onFail.bind(this));
      });
  }

  onSuccess() {
    this.setState({
      error: '',
      text: '',
      password: '',
      loading: false
    });
  }

  onFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
      }

      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log In
        </Button>
      );
  }

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

      <CardSection>
        <Input
          secureTextEntry
          label="Password"
          placeholder="password"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
      </CardSection>

      <Text style={styles.errorTextStyle}>
        {this.state.error}
      </Text>

      <CardSection>
        {this.renderButton()}
      </CardSection>

    </Card>

    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 10,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
