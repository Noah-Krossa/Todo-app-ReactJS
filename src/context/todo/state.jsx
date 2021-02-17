import React, { useReducer } from 'react'
import todoReducer from './reducer'
import TodoContext from './context'
import TodoService from '../../services/todoService'

const todoStorageService = new TodoService()

const TodoState = (props) => {
  const initialState = {
    todos: [],
    currentTodo: null,
  }
  const [{ todos }, dispatch] = useReducer(todoReducer, initialState)

  const getTodos = (date) => {
    dispatch({
      type: 'GET_TODOS',
      payload: todoStorageService.getAllTodos(date),
    })
  }

  const toggleTodo = (id, dateContex) => {
    todoStorageService.updateTodoState(id)
    dispatch({
      type: 'GET_TODOS',
      payload: todoStorageService.getAllTodos(dateContex),
    })
  }

  const addTodo = (todo) => {
    todoStorageService.addTodo(todo)
    dispatch({
      type: 'UPDATE_TODOS',
      payload: todoStorageService.getAllTodos(todo.date),
    })
  }

  const removeTodo = (id, dateContex) => {
    todoStorageService.removeTodo(id)
    dispatch({
      type: 'UPDATE_TODOS',
      payload: todoStorageService.getAllTodos(dateContex),
    })
  }

  return (
    <TodoContext.Provider
      value={{ todos, getTodos, addTodo, removeTodo, toggleTodo }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}
export default TodoState
