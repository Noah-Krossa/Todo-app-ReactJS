import React, { useReducer } from 'react'
import DateReducer from './reducer'
import DateContext from './context'
import moment from 'moment'

const DateState = (props) => {
  const initialState = {
    current: moment().format('MMM Do YYYY'),
  }
  const [state, dispatch] = useReducer(DateReducer, initialState)

  const nextDay = () => {
    dispatch({
      type: 'NEXT_DAY',
    })
  }
  const previousDay = () => {
    dispatch({
      type: 'PREVIOUS_DAY',
    })
  }

  return (
    <DateContext.Provider
      value={{
        current: state.current,
        nextDay,
        previousDay,
      }}
    >
      {props.children}
    </DateContext.Provider>
  )
}
export default DateState
