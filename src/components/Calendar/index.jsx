import React from 'react'

import Theme from '../Theme'
import Month from '../Month'

import './index.css'
import { useSelector } from 'react-redux'

const Calendar = () => {
  const themeMode = useSelector((state) => state.calendar.themeMode)
  const styleCalendar = ['calendar']
  if (themeMode) {
    styleCalendar.push('darkMode')
  }
  return (
    <div className='calendar_wrapper'>
      <div className={styleCalendar.join(' ')}>
        <div className='calendar_box-theme'>
          <Theme />
        </div>
        <div className='calendar_body'>
          <Month />
        </div>
      </div>
    </div>
  )
}

export default Calendar
