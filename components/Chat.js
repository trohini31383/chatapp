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
}