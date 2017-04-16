import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import Profile from './Profile.js';
import Login from './Login.js'
import PageControlIOS from 'react-native-page-control';
import ViewContainer from './ViewContainer.js';
import StatusBarBackground from './StatusBarBackground.js';

export default class PageControl extends Component {
  constructor (props){
    super(props)

    this.state ={
      currentPage:0,
      width: Dimensions.get('window').width
    }
    this._onPageControlValueChange = this._onPageControlValueChange.bind(this);
    this._onScroll = this._onScroll.bind(this);
  }
  _onPageControlValueChange(currentPage){
    this.refs.ScrollView.scrollResponderScrollTo({x: this.state.width * currentPage, y: 0, animated: true});
  }
  _onScroll({nativeEvent}){
    let currentPage = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(this.state.currentPage != currentPage)
    {
      this.setState({currentPage});
    }
  }

  render(){
    return(
      <ViewContainer>
        <StatusBarBackground />
          <View style={Styles.scrollViewContainer}>
            <ScrollView ref='ScrollView' horizontal={true} onScroll={this._onScroll} pagingEnabled={true}>
              <View style={[Styles.scrollScene, {width: this.state.width}]}>
                <Login />
              </View>
              <View style={[Styles.scrollScene, {width: this.state.width}]}>
                <Profile />
              </View>

            </ScrollView>
          </View>
          <View style={Styles.pageControl}>
            <PageControlIOS
              currentPage={this.state.currentPage}
              numberOfPages={2}
              pageIndicatorTintColor="grey"
              currentPageIndicatorTintColor="black"
              onValueChange={this._onPageControlValueChange}

              />
          </View>
      </ViewContainer>
    )
  }
}

const Styles = StyleSheet.create({
  pageControl:{

  },

  scrollViewContainer:{
    flex:1
  },

  scrollScene:{

  }
})
