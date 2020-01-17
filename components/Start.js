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
      


      <Text style={Styles.title}>Chat App</Text>



      <View style={styles.container}>

        <TextInput style={styles.nameBox}>
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
          placeholder='Your Name'
        />



        <Button
            title="Enter The Chat Room"
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name })}
       />


        
        

      </View> 

      





    );
  }
}
    
const styles = StyleSheet.create({

          container: {

          flex: 1,
    
        backgroundColor: '#fff',
    
        alignItems: 'center',
    
        justifyContent: 'center',
    
        height: '44%',
    
        width: '88%',
    
        marginBottom: 20
    
      },
  nameBox: {

          fontSize: 16,
    
        fontWeight: "600",
    
        color: '#000000',
    
        borderWidth: 1,
    
        borderColor: 'grey',
    
        marginBottom: 30,
    
        marginTop: 30,
    
        width: '88%'
    
      },
  text: {

          fontSize: 16,
    
        fontWeight: "300",
    
        color: '#757083'
    
      },
  button: {

          fontSize: 16,
    
        fontWeight: "600",
    
        color: '#FFFFFF',
    
        backgroundColor: '#757083',
    
        width: '88%',
    
        marginBottom: 30
    
      }
    
});