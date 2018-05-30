import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { LoggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyB0HTh_7j0bLm6KIslduXsJhpWsPfIgDrs',
    authDomain: 'auth-8b666.firebaseapp.com',
    databaseURL: 'https://auth-8b666.firebaseio.com',
    projectId: 'auth-8b666',
    storageBucket: 'auth-8b666.appspot.com',
    messagingSenderId: '1061421106474'
  });
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ LoggedIn: true });
    } else {
      this.setState({ LoggedIn: false });
    }
  });
  }

  renderContent() {
    switch (this.state.LoggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <CardSection><Spinner size="large" /></CardSection>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />

        {this.renderContent()}
      </View>
    );
  }


}

export default App;
