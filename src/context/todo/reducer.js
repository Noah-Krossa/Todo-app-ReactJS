import {
  UPDATE_TODOS,
  GET_TODOS,
  REMOVE_TODO,
  ADD_TODO,
  TOGGLE_TODO,
} from '../type'

export default (state, action) => {
  const { type, payload } = action
  switch (type) {
    case GET_TODOS:
      return {
        ...state,
        todos: payload,
      }
    case TOGGLE_TODO:
      console.log(payload)
      return {
        ...state,
        todos: payload,
      }
    case ADD_TODO:
      return {
        ...state,
        todos: payload,
      }
    case REMOVE_TODO:
      return {
        ...state,
        todos: payload,
      }
    default:
      return state
  }
}
