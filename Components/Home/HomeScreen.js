import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

import { Button, } from 'native-base';
import * as firebase from 'firebase';

import backgroundImage from '../../assets/HomeScreen/home_screen_background.jpg';

export default class HomeScreen extends Component {

   constructor(props) {
      super(props);
      console.ignoredYellowBox = [
         'Setting a timer'
      ]
   }
   static navigationOptions = {
      header: null
   }

   componentDidMount() {
      firebase.auth().signInWithEmailAndPassword("chetan@gmail.com", "chetan12")
      .then(() => console.log("Logged In"))
      .catch((err) => console.log(err));
   }
   render() {
      return (
         <View style={styles.homeScreenView}>
            <View style={styles.imageView}>
               <Image source={backgroundImage} style={styles.image} />
            </View>
            <Button
               block={true}
               onPress={() => this.props.navigation.navigate('SearchTabNavigator')}
            >
               <Text style={{ color: 'white' }}> Search Beers</Text>
            </Button>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   homeScreenView: {
      flex: 1,
      justifyContent: 'flex-end'
   },
   image: {
      flex: 1,
      height: null,
      width: null
   },
   imageView: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%'
   },
});