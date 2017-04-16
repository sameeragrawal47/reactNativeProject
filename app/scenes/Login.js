import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import ViewContainer from './ViewContainer.js';
import StatusBarBackground from './StatusBarBackground.js';
import { Styles } from './Styles.js';
import {firebaseRef} from '../services/firebase.js';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state ={
      email:'',
      password:'',
      status:''
    }
this._login = this._login.bind(this);
this._register = this._register.bind(this);
  }

  _login(){

      firebaseRef.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        console.log(error.code);
        console.log(error.message);
    //    Actions.profile();
      });

  }
  _register(){
    Actions.register();
  }

  _onFocus(){

  }


render(){
return(
  <ViewContainer>
    <StatusBarBackground />

    <View style = { Styles.logo }>
      <Image source= {require('../resources/loginLogo.png')} />
    </View>

    <View style={Styles.inputButtons}>
      <TextInput style = {Styles.textInput}
      onChangeText={(text) => this.setState({email: text})}
      value = {this.state.email}
      autoCapitalize='none'
      onFocus={this.onFocus}
      placeholder = "EMAIL"
      placeholderTextColor = 'black'
      autoCorrect={false}
      returnKeyType="next"
      keyboardAppearance="dark"
       />
       <View style = {Styles.hairLine} />

       <TextInput style = {Styles.textInput}
       onChangeText={(text) => this.setState({password: text})}
       value = {this.state.password}
       placeholder = "PASSWORD"
       placeholderTextColor = 'black'
       autoCapitalize='none'
       secureTextEntry={true}
       autoCorrect={false}
       returnKeyType="go"
       keyboardAppearance="dark"
        />
        <View style = {Styles.hairLine} />
    </View>

    <View style={Styles.login}>
      <TouchableOpacity style={Styles.loginButton} onPress={this._login}>
        <Text style={Styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>

    <View style={Styles.register}>
      <TouchableOpacity style={Styles.registerButton} onPress={this._register}>
        <Text style={Styles.registerButtonText}>Create Account</Text>
      </TouchableOpacity>
    </View>

  </ViewContainer>
)}
}
