import React from 'react'
import TodoInput from './components/todoInput'
import TodoList from './components/todoList'
import TodoState from './context/todo/state'
import DateState from './context/date/state'
import Calendar from './components/calendar'

import './styles.css'

const App = () => {
  return (
    <TodoState>
      <DateState>
        <div className="todo_container">
          <Calendar></Calendar>
          <TodoInput></TodoInput>
          <TodoList></TodoList>
        </div>
      </DateState>
    </TodoState>
  )
}
export default App
