import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './index.css'

import { handelPrevMonthBtn } from '../../store/calendarSlice'
import { handelNextMonthBtn } from '../../store/calendarSlice'

const index = () => {
  const selectedMonth = useSelector((state) => state.calendar.selectedMonth)

  const dispatch = useDispatch()

  const PrevMonthBtn = (date) => {
    const prevMonth = date.month - 1

    const getCorrectDate = new Date(date.year, prevMonth)
    const newDate = {
      year: getCorrectDate.getFullYear(),
      month: getCorrectDate.getMonth(),
      date: getCorrectDate.getDate(),
    }
    dispatch(handelPrevMonthBtn({ newDate }))
  }

  const NextMonthBtn = (date) => {
    const nextMonth = date.month + 1
    const getCorrectDate = new Date(date.year, nextMonth)
    const newDate = {
      year: getCorrectDate.getFullYear(),
      month: getCorrectDate.getMonth(),
      date: getCorrectDate.getDate(),
    }
    dispatch(handelNextMonthBtn({ newDate }))
  }
  return (
    <div className='month_btn'>
      <button
        onClick={() => PrevMonthBtn(selectedMonth)}
        className='month_btn-left'
      ></button>
      <button
        onClick={() => NextMonthBtn(selectedMonth)}
        className='month_btn-right'
      ></button>
    </div>
  )
}

export default index
