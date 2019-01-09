import React, { Component } from 'react';

//Components
import TodoList from './todo/TodoList'
import Button from '../components/Button'
import {connect} from 'react-redux'

//actions
import increment from '../actions/increment'
import decrement from '../actions/decrement'


class Todo extends Component {
  state = {
    todo: ['Bangun', 'Mandi'],
    newTodo: '',
    dummy: ''
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
        <h2>{this.props.name}, counter kita adalah: {this.props.counter}</h2>
        <Button
          text= "+"
          color="green"
          fn={() => this.props.increment(2)}
        />
        <Button
          text= "-"
          color="red"
          fn={() => this.props.decrement(3)}
        />

        <h1>Ini todo kita hari ini</h1>
        <form onSubmit={(e) => {e.preventDefault(); this.addTodo(); }}>
          <input type="text" placeholder="ini new todo" value={newTodo} name="newTodo" onChange={this.handleChange.bind(this)} />
        </form>
        {/* <input type="text" placeholder="ini dummy" value={dummy} name="dummy" onChange={(e) => this.handleChange(e)}/> */}
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

const mapStateToProps = state => {
  return {
    counter: state.count.counter,
    name: state.name.name
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: (payload) => dispatch(increment(payload)),
    decrement: (payload) => dispatch(decrement(payload))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo);
