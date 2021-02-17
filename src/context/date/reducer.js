import { PREVIOUS_DAY, NEXT_DAY } from '../type'
import moment from 'moment'

export default (state, action) => {
  const { type } = action
  switch (type) {
    case NEXT_DAY:
      const date = moment(state.current, 'MMM Do YYYY')
        .add(1, 'day')
        .format('MMM Do YYYY')
      return {
        ...state,
        current: date,
      }
    case PREVIOUS_DAY:
      return {
        ...state,
        current: moment(state.current, 'MMM Do YYYY')
          .subtract(1, 'day')
          .format('MMM Do YYYY'),
      }
    default:
      return state
  }
}
