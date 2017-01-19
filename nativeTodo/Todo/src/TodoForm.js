import React, { Component } from 'react';	
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';
import { connect }  from 'react-redux';

export const TodoForm = (props) => (
	<View style={styles.form}>
	  <TextInput 
	    style = {styles.TextInput}
	    value={props.value} 
	    onChangeText={props.handleChange} />
	  <TouchableHighlight style={styles.TouchableHighlight} onPress={props.handlePress}>
	      <Text>Add Item</Text>
	  </TouchableHighlight>
	</View>
);

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderColor: '#4B555F',
    paddingBottom: 15
  },
  TextInput: {
    flex: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#00DCAA'
  },
  TouchableHighlight: {
    marginLeft: 3,
    borderColor: '#00DCAA',
    borderWidth: 1,
    padding: 5,
    borderRadius: 10
  }
});