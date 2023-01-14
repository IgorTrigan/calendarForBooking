import React from 'react'

import './index.css'
import { useDispatch, useSelector } from 'react-redux'

import { handelSelectedTime } from '../../store/calendarSlice'

import BtnTime from '../UI/BtnTime'

const index = () => {
  const timeScheduleTemplate = useSelector(
    (state) => state.calendar.timeScheduleTemplate
  )
  const selectedDate = useSelector((state) => state.calendar.selectedDate)
  const scheduleBooked = useSelector((state) => state.calendar.scheduleBooked)

  const dispatch = useDispatch()

  const strDay = `${selectedDate.year}.${selectedDate.month}.${selectedDate.date}`
  const isDayBooked = Object.keys(scheduleBooked).includes(strDay)
  let alreadyBookedTime = {}
  if (isDayBooked) {
    alreadyBookedTime = scheduleBooked[strDay]
  }
  console.log(alreadyBookedTime)
  const selectedTime = (index) => {
    dispatch(handelSelectedTime(index))
  }

  return (
    <div className='time_book'>
      {timeScheduleTemplate.map((time, index) => (
        <BtnTime
          key={index}
          time={time}
          index={index}
          btnSelectedTime={selectedTime}
          alreadyBookedTime={alreadyBookedTime}
        />
      ))}
    </div>
  )
}

export default index
