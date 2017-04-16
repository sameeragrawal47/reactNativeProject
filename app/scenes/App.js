import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import ViewContainer from './ViewContainer.js';
import StatusBarBackground from './StatusBarBackground.js';
import Login from './Login.js';
import Register from './Register.js';
import Profile from './Profile.js';
import PageControl from './PageControl.js';
import {Router, Scene} from 'react-native-router-flux';
export default class App extends Component {
render(){
return(

    //<PageControl />
  <Router>
    <Scene key={'root'}>
      <Scene
        key={'login'}
        component={Login}
        initial={true}
        hideNavBar={true}
      />
      <Scene
        key={'register'}
        component={Register}
      />
     <Scene
      key={'profile'}
      component={Profile}
     />
  </Scene>
  </Router>

)
}
}
