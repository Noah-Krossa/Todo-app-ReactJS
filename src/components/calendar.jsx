import moment from 'moment'
import React, { useContext } from 'react'
import DateContext from '../context/date/context'

const Calendar = () => {
  const { current, nextDay, previousDay } = useContext(DateContext)

  const handleEvent = (e) => {
    const { name } = e.target
    switch (name) {
      case 'next':
        nextDay()
        break
      case 'previous':
        previousDay()
        break
    }
  }

  return (
    <div className="calendar">
      <button className="calendar_button" onClick={handleEvent} name="previous">
        <i className="fas fa-chevron-left"></i>
      </button>
      <div className="calendar_date">
        <span className="calendar_day">
          {moment(current, 'MMM Do YYYY').format('dddd').toString()}
        </span>
        <span>{current.toString()}</span>
      </div>
      <button className="calendar_button" onClick={handleEvent} name="next">
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  )
}
export default Calendar
