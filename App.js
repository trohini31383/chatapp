import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Start from './components/Start';

import Chat from './components/Chat';

import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
const firebase = require("firebase");

require("firebase/firestore");



firebase.initializeApp({

  apiKey: "AIzaSyBRu3B4hnEjXADsP3cZgATAdl0whjkQuWg",
  authDomain: "chat-app-ecfe3.firebaseapp.com",
  databaseURL: "https://chat-app-ecfe3.firebaseio.com",
  projectId: "chat-app-ecfe3",
  storageBucket: "chat-app-ecfe3.appspot.com",
  messagingSenderId: "199946168634",
  appId: "1:199946168634:web:a3e0ca184cbe617c134803",
  measurementId: "G-G1J73S34FT"
});

const navigator = createStackNavigator({
  Start: { screen: Start },
  Chat: { screen: Chat }
});

const navigatorContainer = createAppContainer(navigator);


// Export it as the root component
export default navigatorContainer;
