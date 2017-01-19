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
import { TodoForm } from './TodoForm'

const mapActionsToProps = (dispatch) => ({
  createTodo(todo) {
    dispatch({type: CREATE_TODO, payload: todo})
  }
});

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
    if (this.state.newTodo === '' || this.state.newTodo.substring(0,1) === ' ') {
      return;
    } 
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
      .then(fetch('http://localhost:3000/todos', { 
        headers: {'Accept': 'application/json'}})
        .then(res => res.json())
        .then(todos => this.setState({todos})))
  }

  render() {
    return (
      <View style={styles.container}>
       <TodoForm 
          handlePress={this.handlePress.bind(this)} 
          handleChange={this.handleChange.bind(this)} 
          value={this.state.newTodo}/>
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
