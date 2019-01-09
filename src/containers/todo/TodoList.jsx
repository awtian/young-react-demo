import React from 'react';

//components 
import SingleTodo from './todolist/SingleTodo'
import Button from '../../components/Button'

const TodoList = (props) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{width: '15vw'}}>
        <ul>
          {props.todos.map(each => <SingleTodo key={each} todo={each} />)}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
