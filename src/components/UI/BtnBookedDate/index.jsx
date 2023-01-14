import React from 'react'

import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { handelBookTime } from '../../../store/calendarSlice'

const index = () => {
  const dispatch = useDispatch()
  const selectedTime = useSelector((state) => state.calendar.selectedTime)
  const selectedDate = useSelector((state) => state.calendar.selectedDate)

  const bookTime = (time, date) => {
    dispatch(handelBookTime({ time, date }))
  }

  return (
    <button
      onClick={() => bookTime(selectedTime, selectedDate)}
      className='bookedBtn'
    >
      Підтвердити
    </button>
  )
}

export default index
