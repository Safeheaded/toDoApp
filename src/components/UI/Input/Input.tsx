import React from 'react'
import {
    TextInput,
	StyleSheet,
  } from 'react-native';


  class Input extends React.Component {
    constructor(props) {
      super(props);
     
    }
  
    render() {
      return (
        <TextInput
          style={[styles.text]}
          placeholder="Text"
          
        />
       
      );
    }
  }
  
  const styles = StyleSheet.create ({
        text: {
            marginTop: 20,
            height: 89,
            borderColor: 'gray',
            borderWidth: 1
        },
    })
  

export default Input;