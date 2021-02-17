import { UPDATE_TODOS, GET_TODOS } from '../type'

export default (state, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
      }
    case UPDATE_TODOS:
      return {
        ...state,
        todos: payload,
      }
    default:
      return state
  }
}
