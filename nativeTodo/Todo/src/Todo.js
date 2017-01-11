import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

export class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  componentWillMount() {
    fetch('http://localhost:3000/todos', { 
      headers: {'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(todos => this.setState({todos}))
  }

  handleChange(text){
    this.setState({newTodo: text});
  }

  handlePress(){
    fetch('http://localhost:3000/todos', {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.newTodo
      })
    })
    .then(res => res.json())
    .then(todo => {const todos = [this.state.newTodo, ...this.state.todos];
      this.setState({todos, newTodo: ''});
    })
    
    fetch('http://localhost:3000/todos', { 
      headers: {'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(todos => this.setState({todos}))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput 
            style = {styles.TextInput}
            value={this.state.newTodo} 
            onChangeText={this.handleChange.bind(this)} />
          <TouchableHighlight style={styles.TouchableHighlight} onPress={this.handlePress.bind(this)}>
              <Text>Add Item</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.listContainer}> 
          {this.state.todos.map((todo, i) => (<View style={styles.listItem} key={i} ><Text style={styles.listItemText}> {todo.name} </Text></View>))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
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

  },
  listContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  listItem: {
    padding: 5,
    borderBottomColor: 'grey',
    borderBottomWidth: 1
  }, 
  listItemText: {
    color: 'black'
  }
});

AppRegistry.registerComponent('Todo', () => Todo);
