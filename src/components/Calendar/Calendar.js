import dayjs from 'dayjs'

const DAYS_IN_WEEK = 7

const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const Month = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
}

const ukrMonth = [
  'Січень',
  'Лютий',
  'Березень',
  'Квітень',
  'Травень',
  'Червень',
  'Липень',
  'Серпень',
  'Вересень',
  'Жовтень',
  'Листопад',
  'Грудень',
]
const ukrMonthEnd = [
  'Січеня',
  'Лютого',
  'Березеня',
  'Квітня',
  'Травня',
  'Червня',
  'Липня',
  'Серпня',
  'Вересня',
  'Жовтня',
  'Листопада',
  'Грудня',
]

export function getUkrMonth(month) {
  return ukrMonth[month]
}
export function getUkrMonthEnd(month) {
  return ukrMonthEnd[month]
}

export function isLeapYear(year) {
  return !(year % 4 || (!(year % 100) && year % 400))
}

export function getDaysInMonth(date) {
  const month = date.getMonth()
  const year = date.getFullYear()
  const daysInMonth = DAYS_IN_MONTH[month]

  if (isLeapYear(year) && month === Month.February) {
    return daysInMonth + 1
  } else {
    return daysInMonth
  }

  return DAYS_IN_MONTH[month]
}

export function getDayOfWeek(date) {
  const dayOfWeek = date.getDay()

  if (dayOfWeek === 0) return 6
  return dayOfWeek - 1
}

export function getMonthData(year, month) {
  const result = []
  const date = new Date(year, month)
  let day = 1
  const daysInMonth = getDaysInMonth(date)
  const monthStartsOn = getDayOfWeek(date)

  for (let i = 0; i < (daysInMonth + monthStartsOn) / DAYS_IN_WEEK; i++) {
    result[i] = []
    for (let j = 0; j < DAYS_IN_WEEK; j++) {
      if ((i === 0 && j < monthStartsOn) || day > daysInMonth) {
        result[i][j] = undefined
      } else {
        result[i][j] = { year, month, date: day++ }
        // result[i][j] = new Date(year, month, day++)
      }
    }
  }

  return result
}
