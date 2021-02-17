class LocalDB {
  constructor(name = null) {
    if (!name) throw new Error('Cannot create a LocalDB without name')
    this.dbName = name
    if (!localStorage.getItem(name)) localStorage.setItem(this.dbName, '[]')
  }

  find() {
    return JSON.parse(localStorage.getItem(this.dbName))
  }

  remove() {
    localStorage.removeItem(this.dbName)
  }

  update(data) {
    localStorage.setItem(this.dbName, JSON.stringify(data))
  }
}
export default LocalDB
