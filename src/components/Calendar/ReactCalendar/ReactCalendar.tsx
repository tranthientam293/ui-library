import Calendar, { CalendarProps } from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { CalendarType } from 'react-calendar/dist/cjs/shared/types'
import './ReactCalendar.scss'
import { JumpNext, JumpPrev, Next, Prev } from './icons'

interface ReactCalendarProps
  extends Pick<
    CalendarProps,
    | 'selectRange'
    | 'locale'
    | 'onChange'
    // | 'view'
    | 'showNavigation'
    | 'showWeekNumbers'
  > {
  calendarType?: CalendarType
}

export function ReactCalendar({ selectRange, ...props }: ReactCalendarProps) {
  return (
    <Calendar
      selectRange={selectRange}
      allowPartialRange={selectRange}
      className="custom-react-calendar"
      nextLabel={<Next />}
      prevLabel={<Prev />}
      next2Label={<JumpNext />}
      prev2Label={<JumpPrev />}
      {...props}
    />
  )
}
