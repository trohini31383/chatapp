import React, { Component } from "react";

import { StyleSheet, View, Text, Platform, FlatList } from "react-native";
import { GiftedChat, Bubble, ActionButton } from 'react-native-gifted-chat';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import firebase from "firebase";


import "firebase/firestore";
export default class Chat extends React.Component {

  constructor() {

    super();

    this.referenceMessageUser = null;
    this.referenceMessages = firebase.firestore().collection('messages')

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

  }

  setUser = (_id, name = 'Guest User', avatar = 'https://placeimg.com/140/140/any') => {

    this.setState({

      user: {

        _id: _id,

        name: name,

        avatar: avatar,

      }

    })

  }


  componentDidMount() {
    this.authUnsubscribe = firebase.auth().onAuthStateChanged(async user => {

      if (!user) {

        await firebase.auth().signInAnonymously();

      }
      if (!this.props.navigation.state.params.name) {

        this.setUser(user.uid);

        this.setState({

          uid: user.uid,

          loggedInText: "Hello there"

        });

      } else {

        this.setUser(user.uid, this.props.navigation.state.params.name)

        this.setState({

          uid: user.uid,

          loggedInText: "Hello there"

        });

      }
      // create a reference to the active user's documents (messages)

      this.referenceMessageUser = firebase.firestore().collection("messages");

      // listen for collection changes for current user

      this.unsubscribeMessageUser = this.referenceMessageUser.orderBy('createdAt', 'desc').onSnapshot(this.onCollectionUpdate);

    });

  }


  addMessage() {

    console.log(this.state.user)

    this.referenceMessages.add({

      _id: this.state.messages[0]._id,

      text: this.state.messages[0].text || '',

      createdAt: this.state.messages[0].createdAt,

      user: this.state.user,

      uid: this.state.uid,

      image: this.state.messages[0].image || '',

      location: this.state.messages[0].location || null,

    });

  }





  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }),
      () => {

        this.addMessage();
      }

    );
  }

  componentWillUnmount() {
    // stop listening to authentication

    this.authUnsubscribe();

    //stop listening for changes

    this.unsubscribeMessageUser();
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data

      let data = doc.data();

      messages.push({

        _id: data._id,

        text: data.text,

        createdAt: data.createdAt.toDate(),

        user: data.user,

        image: data.image || '',

        location: data.location || null,

      });

    });

    this.setState({

      messages

    });

  };









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

          user={this.state.user}
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