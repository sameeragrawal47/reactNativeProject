import React, { Component } from 'react';
import {Text, View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import ViewContainer from './ViewContainer.js';
import StatusBarBackground from './StatusBarBackground.js';
import { Styles } from './Styles.js';
import {firebaseRef} from '../services/firebase.js';
import {Actions} from 'react-native-router-flux';

export default class Register extends Component {
  constructor(props){
    super(props)
    this.state ={
      email:'',
      password:'',
      verifyPassword:''
    }
    this._register = this._register.bind(this);
  }

  _register(){
    if(this.state.password == this.state.verifyPassword){
      firebaseRef.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
        console.log(error.code);
        console.log(error.message);
        Actions.login();
      });
    }

    else{
      console.log("Password do not match");
    }
  }

render(){
return(
  <ViewContainer>
    <StatusBarBackground />

    <View style = { Styles.logoReg }>
      <Image source= {require('../resources/loginLogo.png')} />
    </View>

    <View style={Styles.inputButtons}>
      <TextInput style = {Styles.textInput}
      onChangeText={(text) => this.setState({email: text})}
      value = {this.state.email}
      placeholder = "EMAIL"
      autoCapitalize='none'
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
       autoCapitalize='none'
       placeholderTextColor = 'black'
       secureTextEntry={true}
       autoCorrect={false}
       returnKeyType="next"
       keyboardAppearance="dark"
        />
        <View style = {Styles.hairLine} />

        <TextInput style = {Styles.textInput}
        onChangeText={(text) => this.setState({verifyPassword: text})}
        value = {this.state.verifyPassword}
        placeholder = "Verify Password"
        autoCapitalize='none'
        placeholderTextColor = 'black'
        secureTextEntry={true}
        autoCorrect={false}
        returnKeyType="go"
        keyboardAppearance="dark"
         />
        <View style = {Styles.hairLine} />
    </View>

    <View style={Styles.register}>
      <TouchableOpacity style={Styles.registerButton} onPress={this._register}>
        <Text style={Styles.registerButtonText}>Register</Text>
      </TouchableOpacity>
    </View>

  </ViewContainer>
)}
}
