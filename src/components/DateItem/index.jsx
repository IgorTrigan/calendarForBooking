import React from 'react'

import './index.css'

import '../DateItem'
import { useDispatch, useSelector } from 'react-redux'
import { handelSelectedDate } from '../../store/calendarSlice'

const index = ({ date }) => {
  const dispatch = useDispatch()

  const SelectedDateFn = (date) => {
    dispatch(handelSelectedDate(date))
  }
  const style = ['date']
  const selectedDate = useSelector((state) => state.calendar.selectedDate)
  const currentDate = useSelector((state) => state.calendar.currentDate)

  const proveSelectedDate = selectedDate ? selectedDate : currentDate

  if (
    proveSelectedDate.date === date.date &&
    proveSelectedDate.month === date.month &&
    proveSelectedDate.year === date.year
  ) {
    style.push('curruent_date')
  }
  return (
    <p onClick={() => SelectedDateFn(date)} className={style.join(' ')}>
      {date.date}
    </p>
  )
}

export default index
