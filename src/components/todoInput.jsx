import React, { useContext } from 'react'
import TodoContext from '../context/todo/context'
import DateContext from '../context/date/context'
import moment from 'moment'

const TodoInput = () => {
  const { addTodo } = useContext(TodoContext)
  const { current } = useContext(DateContext)

  const handleEvent = (e) => {
    if (moment(current, 'MMM Do YYYY').add(1, 'day').unix() < moment().unix())
      return

    if (e.code === 'Enter') {
      const { value } = e.target
      if (!value.trim()) return
      addTodo({
        title: value,
        date: current,
        isDone: false,
      })
      e.target.value = ''
    }
    return
  }

  return (
    <div className="todo_input">
      <i className="fas fa-tasks"></i>
      <input onKeyDown={handleEvent} type="text" placeholder="Add new task" />
    </div>
  )
}
export default TodoInput
