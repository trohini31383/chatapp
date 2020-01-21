import React, { Component } from "react";

import { StyleSheet, View, Text, Platform } from "react-native";
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import KeyboardSpacer from 'react-native-keyboard-spacer'
export default class Chat extends React.Component {

  constructor() {

    super();
    this.state = {
      messages: [],
      user: {

        _id: '',

        name: '',

        avatar: ''

      },
    };
  }

  static navigationOptions = ({ navigation }) => {

    return {

      title: navigation.state.params.name

    };

  };

  componentDidMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  componentWillUnmount() { }

  renderBubble(props) {
    return (
      <Bubble {...props}
        wrapperStyle={{
          left: {
            backgroundColor: 'white',
          },
          right: {
            backgroundColor: 'green'
          }
        }} />
    )
  }

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

      >

        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {Platform.OS === 'android' ? <KeyboardSpacer /> : null}


      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: "#fff",

    alignItems: "center",

    justifyContent: "center",

    width: "100%"

  }

});