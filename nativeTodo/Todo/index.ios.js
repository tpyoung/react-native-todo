import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(e){
    const {value} = e.target;
    this.setState({newTodo: value});
  }
  handleClick(e){
    e.preventDefault();
    const todos = [...this.state.todos, this.input.value];
    this.input.value = ''
    this.setState({todos});
  }

  render() {
    return (
      <View style={styles.container}>
      <View>
        <TextInput value={this.state.newTodo} style={{flex: 1}} onChange={this.handleChange.bind(this)} />
        <TouchableHighlight onPress={this.handleClick.bind(this)}><Text>Add Item</Text></TouchableHighlight>
        </View>
          <Text>  
             {this.state.todos.map(todo => (<Text>{todo}</Text>))}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Todo', () => Todo);
