import React from 'react'
import { useSelector } from 'react-redux'

import './index.css'

const index = ({ time, index, btnSelectedTime, alreadyBookedTime }) => {
  const selectedTime = useSelector((state) => state.calendar.selectedTime)

  const styleTimeBtn = ['time_book_btn']

  if (alreadyBookedTime[time]) {
    styleTimeBtn.push('alreadyBookedTime')
  } else if (selectedTime === time) {
    styleTimeBtn.push('selectedTime')
  }
  return alreadyBookedTime[time] ? (
    <button className={styleTimeBtn.join(' ')}>{time}</button>
  ) : (
    <button
      onClick={() => btnSelectedTime(index)}
      className={styleTimeBtn.join(' ')}
    >
      {time}
    </button>
  )
}

export default index
