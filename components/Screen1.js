import React, { Component } from 'react';

import { StyleSheet, Text, TextInput, Alert, Button, View } from 'react-native';

export default class Start extends React.Component {



  constructor(props) {

    super(props);

    this.state = {

      name: '',

      color: ''

    }

  }




  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello Screen1!</Text>
        <Button
          title="Go to Screen 2"
          onPress={() => this.props.navigation.navigate('Screen2')}
        />
      </View>
    )
  }
}