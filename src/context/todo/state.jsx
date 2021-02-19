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
      payload: todoStorageService.getTodosByDate(date),
    })
  }

  const toggleTodo = (id, dateContex) => {
    const updatedTodos = todoStorageService.updateTodoState(id)
    dispatch({
      type: 'TOGGLE_TODO',
      payload: updatedTodos,
    })
  }

  const addTodo = (todo) => {
    const updatedTodos = todoStorageService.addTodo(todo)
    dispatch({
      type: 'ADD_TODO',
      payload: updatedTodos,
    })
  }

  const removeTodo = (id) => {
    const updatedTodos = todoStorageService.removeTodo(id)
    dispatch({
      type: 'REMOVE_TODO',
      payload: updatedTodos,
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
