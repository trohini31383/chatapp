import React, { Component } from "react";

import { StyleSheet, View, Text } from "react-native";
export default class Chat extends React.Component {

  constructor() {

    super();
    this.state = {}
  }

  static navigationOptions = ({ navigation }) => {

    return {

      title: navigation.state.params.name

    };

  };

  render() {

    /**

    * uses name and background color defiend on start screen

    */

    return (

      <View

        style={{

          flex: 1,

          backgroundColor: this.props.navigation.state.params.color

        }}

      ></View>
    )
  }
}