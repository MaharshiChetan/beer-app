import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { StackNavigator } from "react-navigation";
import * as firebase from 'firebase';

import HomeScreen from "./Components/Home/HomeScreen";
import SearchTabNavigator from "./Components/Search/SearchTabNavigator";

var firebaseConfig = {
  apiKey: "AIzaSyCNzXkWvXERGxRaEny17s_Tl5G5VGdnuPE",
  authDomain: "reactchat-e5165.firebaseapp.com",
  databaseURL: "https://reactchat-e5165.firebaseio.com",
  projectId: "reactchat-e5165",
  storageBucket: "reactchat-e5165.appspot.com",
  messagingSenderId: "106345995082"
};
firebase.initializeApp(firebaseConfig);

const App = new StackNavigator({
  HomeScreen: { screen: HomeScreen },
  SearchTabNavigator: { screen: SearchTabNavigator }
},
{
  initialRouteName: 'HomeScreen'
});

export default App;