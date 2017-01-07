import React, { Component } from 'react';


export class Todo extends Component {
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
		const todos = [...this.state.todos, this.state.newTodo];
		this.setState({todos, newTodo: ''});
	}
  render() {
    return (
      <div>
      	<form>
      		<input onChange={this.handleChange.bind(this)} value={this.state.newTodo} type='text' placeholder='new todo item' />
      		<button onClick={this.handleClick.bind(this)}>Add Item</button>
      	</form>
      	<ul>	
					{this.state.todos.map(todo => (
							<li>{todo}</li>
						))
					}
      	</ul>
      </div>
    );
  }
}