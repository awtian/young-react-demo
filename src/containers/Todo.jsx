import React, { Component } from 'react';

//Components
import TodoList from './todo/TodoList'
import Button from '../components/Button'
import {connect} from 'react-redux'

class Todo extends Component {
  state = {
    todo: ['Bangun', 'Mandi'],
    newTodo: '',
  }

  addTodo = () => {
    this.setState({
      todo: [...this.state.todo, this.state.newTodo],
      newTodo: ''
    })
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {todo, newTodo, dummy} = this.state;
    return (
      <div>
        <h1>Ini todo kita hari ini</h1>
        <form onSubmit={(e) => {e.preventDefault(); this.addTodo(); }}>
          <input type="text" placeholder="ini new todo" value={newTodo} name="newTodo" onChange={this.handleChange.bind(this)} />
        </form>
        <div style={{margin: '10px'}}>
          <Button
            text= "Add Todo"
            color="black"
            fn={this.addTodo}
            />
        </div>
        <TodoList todos={todo} addTodoFn={this.addTodo} />
      </div>
    );
  }
}



export default Todo;
