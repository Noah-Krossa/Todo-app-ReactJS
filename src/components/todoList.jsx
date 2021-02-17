import React from 'react'
import { useContext, useEffect } from 'react'
import TodoContext from '../context/todo/context'
import DateContext from '../context/date/context'

import TodoItem from './todoItem'

const TodoList = () => {
  const { todos, getTodos } = useContext(TodoContext)
  const { current } = useContext(DateContext)
  useEffect(() => {
    getTodos(current)
  }, [current])

  let list = <div></div>
  if (todos.length > 0) {
    list = todos.map((todo, id) => {
      return <TodoItem key={id} data={todo} />
    })
  }

  return <div className="todo_list">{list}</div>
}
export default TodoList
