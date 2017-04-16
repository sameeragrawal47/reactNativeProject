
import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import App from './app/scenes/App';
export default class newProject extends Component {


render(){
return(
  <App />

);
}
}

AppRegistry.registerComponent('newProject', () => newProject);
