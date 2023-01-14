import React from 'react'
import * as calendar from '../Calendar/Calendar'

import TableDates from '../TableDates'
import TimeChooseBtn from '../TimeChooseBtn'
import BtnBookedDate from '../UI/BtnBookedDate'
import SelectedDateParagraph from '../SelectedDateParagraph'
import ChangeMonth from '../ChangeMonth'

import './index.css'
import { useSelector } from 'react-redux'

const index = () => {
  const selectedMonth = useSelector((state) => state.calendar.selectedMonth)

  const themeMode = useSelector((state) => state.calendar.themeMode)
  const styleCalendar = ['calendar']
  if (themeMode) {
    styleCalendar.push('darkMode')
  }

  const ukrMonth = calendar.getUkrMonth(selectedMonth.month)
  const getYear = selectedMonth.year

  return (
    <div className='month'>
      <div className='month_header'>
        <p className='month_title'>
          {ukrMonth} {getYear}
        </p>
        <ChangeMonth />
      </div>
      <TableDates />
      <TimeChooseBtn />
      <SelectedDateParagraph />
      <BtnBookedDate />
    </div>
  )
}

export default index
