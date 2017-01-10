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

  handleChange(text){
    this.setState({newTodo: text});
  }

  handlePress(){
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({todos, newTodo: ''});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput value={this.state.newTodo} style={{flex: 1}} onChangeText={this.handleChange.bind(this)} />
        <TouchableHighlight style={{flex: 3}} onPress={this.handlePress.bind(this)}><Text>Add Item</Text></TouchableHighlight>
          <Text>  
             {this.state.todos.map((todo, i) => (<Text key={i}>{todo}</Text>))}
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
