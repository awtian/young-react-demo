import React from 'react'
import {shallow} from 'enzyme'
import Todo from './Todo'

describe('<Todo /> testing', () => {
  // beforeEach(() => {
    const wrapper = shallow(<Todo />)
    const fakeEvent = {
      target: {
        name: 'newTodo',
        value: 'youngfox'
      }
    }
    // })

  test('Rendered Successfully', () => {
    expect(wrapper.exists()).toBeTruthy()
  })

  test('contained in one div', () => {
    expect(wrapper).toHaveLength(1)
  })

  test('have a form', () => {
    const wrapperForm = wrapper.find('form')
    expect(wrapperForm).toHaveLength(1)
  })

  test('have an input inside a form', () => {
    const wrapperForm = wrapper.find('form')
    const inputInsideForm = wrapperForm.find('input')
    expect(inputInsideForm).toHaveLength(1)
  })
  
  test('have a todolist', () => {
    const wrapperForm = wrapper.find('TodoList')
    expect(wrapperForm).toHaveLength(1)
  })

  // State Testing 

  test('should have a todolist with length of 2', () => {
    expect(wrapper.state('todo')).toHaveLength(2)
  })

  test('should have a newTodo with string', () => {
    const newTodo = wrapper.state('newTodo')
    const isAString = typeof newTodo === 'string'
    expect(isAString).toBeTruthy()
  })

  test('should have a newTodo with empty string', () => {
    const newTodo = wrapper.state('newTodo')
    expect(newTodo).toHaveLength(0)
  })

  //Events
  test('should able to add todo', () => {
    const addTodo = wrapper.instance().addTodo
    addTodo()
    expect(wrapper.state('todo')).toHaveLength(3)
  })

  test('should able to change newTodo State', () => {
    const handleChange = wrapper.instance().handleChange
    handleChange(fakeEvent)
    expect(wrapper.state('newTodo')).toBe(fakeEvent.target.value)
  })

  test('should able to add the new todo', () => {
    const addTodo = wrapper.instance().addTodo
    addTodo()
    const todoState = wrapper.state('todo')
    expect(todoState[todoState.length-1]).toBe(fakeEvent.target.value)
  })

  // simulate submit
  test('should be able to submit the form', () => {
    const form = wrapper.find('form')
    const fakeSubmitEvent = {
      preventDefault: jest.fn()
    }
    form.simulate('submit', fakeSubmitEvent)
    const todoState = wrapper.state('todo')
    expect(todoState.length).toBe(5)
    expect(fakeSubmitEvent.preventDefault).toBeCalledTimes(1)
  })

})