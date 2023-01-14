import React from 'react'

import './index.css'
import { useSelector } from 'react-redux'
import DateItem from '../DateItem'

const index = () => {
  const monthDate = useSelector((state) => state.calendar.monthDate)
  const weekDays = useSelector((state) => state.calendar.weekDays)

  return (
    <>
      <div className='day_title'>
        {weekDays.map((weekDay, index) => (
          <p key={index}>{weekDay}</p>
        ))}
      </div>
      <div className='table_dates'>
        {monthDate.map((week, index) => (
          <div key={index} className='week-row'>
            {week.map((date, index) =>
              date ? (
                <DateItem key={index} date={date} />
              ) : (
                <p key={index} className='empty_date'></p>
              )
            )}
          </div>
        ))}
      </div>
    </>
  )
}

export default index
