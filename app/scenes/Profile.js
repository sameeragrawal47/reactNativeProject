import React, { Component } from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import ViewContainer from './ViewContainer.js';
import StatusBarBackground from './StatusBarBackground.js';

export default class Profile extends Component {
render(){
return(
  <ViewContainer>
    <StatusBarBackground />

    <View style = { Styles.profilePicture}>
      <View style={Styles.profilePictureBorder}>
        <Image source= {require('../resources/profPic.jpg')} />
      </View>
    </View>

    <View style={Styles.name}>
      <Text style={Styles.nameText}>Sameer Agrawal</Text>
    </View>

    <View style={Styles.runnersDescription}>
      <Text style={Styles.runnersDescriptionText}>Sameer Agrawal MS in Computer Science</Text>
      <Text style={Styles.runnersDescriptionText}>GPA: 3.5</Text>
      <Text style={Styles.runnersDescriptionText}>University: UT Arlington</Text>
    </View>

    <View style={Styles.personalDescription}>
      <View style={Styles.columnOne}>
        <Text style={Styles.personalDescriptionText}>Country: </Text>
        <Text style={Styles.personalDescriptionText}>DOB: </Text>
        <Text style={Styles.personalDescriptionText}>Gender: </Text>
      </View>
      <View style={Styles.columnTwo}>
        <Text style={Styles.personalDescriptionText}>United States</Text>
        <Text style={Styles.personalDescriptionText}>April 26 1991</Text>
        <Text style={Styles.personalDescriptionText}>Male</Text>
      </View>
    </View>

  </ViewContainer>
)}
}

const Styles = StyleSheet.create({
  profilePicture:{
    alignItems:'center',
    marginTop:80
  },

  profilePictureBorder:{
    borderWidth:1,
    borderColor:"#2C0F66",
    height:110,
    width:110,
    borderRadius:55,
    overflow:'hidden'
  },

  name:{
    alignItems:'center',
    marginTop:30,
    marginBottom:24
  },

  nameText:{
    fontSize:24,
    color:'#2C0F66'
  },

  runnersDescription:{
    alignItems:'center',
    marginBottom:100,
    paddingLeft:35,
    paddingRight:35
  },

  runnersDescriptionText:{
    fontSize:12
  },

  personalDescription:{
    flex:1,
    flexDirection:'row'
  },

  personalDescriptionText:{
    fontSize:12
  },

  columnOne:{
    flex:1,
    paddingLeft:70
  },

  columnTwo:{
    flex:1,
    paddingLeft:70
  }
})
