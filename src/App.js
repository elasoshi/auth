import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
    apiKey: 'AIzaSyB0HTh_7j0bLm6KIslduXsJhpWsPfIgDrs',
    authDomain: 'auth-8b666.firebaseapp.com',
    databaseURL: 'https://auth-8b666.firebaseio.com',
    projectId: 'auth-8b666',
    storageBucket: 'auth-8b666.appspot.com',
    messagingSenderId: '1061421106474'
  });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }


}

export default App;
