import LocalDB from './localstorage'
import moment from 'moment'
/**
 * Se encarga de manejar la lista de todos
 */

class TodoService {
  constructor() {
    this.db = new LocalDB('todo_list')
    this.todoStack = this.db.find()
  }

  getAllTodos(date) {
    if (date) {
      return this.filterByDate(date)
    }
    return this.filterByDate(moment().format('MMM Do YYYY'))
  }

  removeTodo(id) {
    this.todoStack = this.todoStack.filter((todo) => todo.id !== id)
    this.db.update(this.todoStack)
  }

  /**
   * This metthod add a new todo to a localstorage db, take title and date
   * and generate a id automaticly
   */
  addTodo({ title, date, isDone }) {
    this.todoStack.push({
      title,
      date,
      isDone,
      id: Math.random().toString(36).substr(2, 8),
    })
    this.db.update(this.todoStack)
  }

  updateTodoState(id) {
    this.todoStack = this.todoStack.map((todo) => {
      if (id === todo.id) todo.isDone = !todo.isDone
      return todo
    })
    this.db.update(this.todoStack)
  }

  /**
   * Return all Todos of how match with date param
   * date: date format string
   * @param {string} date
   */
  filterByDate(date) {
    const foundTodos = this.todoStack.filter((todo) => todo.date === date)
    console.log(foundTodos)
    return foundTodos
  }
}
export default TodoService
