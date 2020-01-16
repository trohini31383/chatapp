import React, { Component } from "react";

import { StyleSheet, View, } from "react-native";
export default class Chat extends React.Component {

  constructor() {

    super();
    this.state = {}
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello Screen2!</Text>
      </View>
    )
  }
}