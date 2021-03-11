import moment from 'moment'

class TodoService {
  constructor() {
    this.dbName = 'todo_list'
    this.todoStack = JSON.parse(localStorage.getItem(this.dbName))
    if (typeof this.todoStack !== 'object') this.todoStack = []
  }

  updateLocalStorage() {
    localStorage.setItem(this.dbName, JSON.stringify(this.todoStack))
  }

  getTodosByDate(date) {
    if (date) {
      return this.filterByDate(date)
    }
    return this.filterByDate(moment().format('MMM Do YYYY'))
  }

  removeTodo(id) {
    const foundTodo = this.todoStack.filter((todo) => todo.id == id)
    this.todoStack = this.todoStack.filter((todo) => todo.id !== id)
    this.updateLocalStorage()
    return this.filterByDate(foundTodo[0].date)
  }

  /**
   * This metthod add a new todo to a localstorage db, take title and date
   * and generate a id automaticly
   */
  addTodo({ title, date, isDone }) {
    this.todoStack.unshift({
      title,
      date,
      isDone,
      id: Math.random().toString(36).substr(2, 8),
    })
    this.updateLocalStorage()
    return this.filterByDate(date)
  }

  updateTodoState(id) {
    let foundTodo
    this.todoStack = this.todoStack.map((todo) => {
      if (id === todo.id) {
        foundTodo = todo
        todo.isDone = !todo.isDone
      }
      return todo
    })
    this.updateLocalStorage()
    return this.filterByDate(foundTodo.date)
  }

  /**
   * Return all Todos of how match with date param
   * date: date format string
   * @param {string} date
   */
  filterByDate(date) {
    if (!this.todoStack) this.todoStack = []
    const foundTodos = this.todoStack.filter((todo) => todo.date === date)
    return foundTodos
  }
}
export default TodoService
