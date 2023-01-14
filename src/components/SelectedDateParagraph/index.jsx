import React from 'react'
import * as calendar from '../Calendar/Calendar'
import { useSelector } from 'react-redux'

import './index.css'

const index = () => {
  const selectedDate = useSelector((state) => state.calendar.selectedDate)

  const selectedTime = useSelector((state) => state.calendar.selectedTime)
  const ukrMonthEnd = calendar.getUkrMonthEnd(selectedDate.month)

  return (
    <p className='fullChoosedTime'>
      {selectedDate.date} {ukrMonthEnd} {selectedDate.year} {selectedTime}
    </p>
  )
}

export default index
