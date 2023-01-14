import { createSlice } from '@reduxjs/toolkit'
import * as calendar from '../components/Calendar/Calendar'
import dayjs from 'dayjs'

const year = dayjs().get('year')
const month = dayjs().get('month')
const date = dayjs().get('date')

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    weekDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
    selectedMonth: {
      year,
      month,
      date,
    },
    selectedDate: {
      year,
      month,
      date,
    },
    selectedTime: null,
    themeMode: false,
    timeScheduleTemplate: ['10:00', '12:00', '16:00', '18:00'],
    monthDate: calendar.getMonthData(year, month),
    scheduleBooked: {},
  },
  reducers: {
    handelPrevMonthBtn(state, action) {
      state.selectedMonth = action.payload.newDate
      state.monthDate = calendar.getMonthData(
        action.payload.newDate.year,
        action.payload.newDate.month
      )
    },
    handelNextMonthBtn(state, action) {
      state.selectedMonth = action.payload.newDate

      state.monthDate = calendar.getMonthData(
        action.payload.newDate.year,
        action.payload.newDate.month
      )
    },
    handelSelectedDate(state, action) {
      state.selectedDate = action.payload
    },
    handelSelectedTime(state, action) {
      state.selectedTime = state.timeScheduleTemplate[action.payload]
    },
    handelSelectedThemeMode(state, action) {
      state.themeMode = !action.payload
    },
    handelBookTime(state, action) {
      const payloadDate = action.payload.date
      const payloadTime = action.payload.time
      const newDate = `${payloadDate.year}.${payloadDate.month}.${payloadDate.date}`

      let day = state.scheduleBooked[newDate]
      if (!day) {
        state.scheduleBooked[newDate] = {}
      }

      state.scheduleBooked[newDate][payloadTime] = true
    },
    handelDelBookTime(state, action) {},
  },
})

export const {
  handelBookTime,
  handelDelBookTime,
  handelNextMonthBtn,
  handelSelectedDate,
  handelPrevMonthBtn,
  handelSelectedTime,
  handelSelectedThemeMode,
} = calendarSlice.actions

export default calendarSlice.reducer
