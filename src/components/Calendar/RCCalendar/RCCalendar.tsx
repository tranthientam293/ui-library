import Calendar, { Props } from 'rc-calendar'
import 'rc-calendar/dist/rc-calendar.css'
import './RCCalendar.scss'

interface IRCCalendar extends Props {}
export function RCCalendar(props: IRCCalendar) {
  return <Calendar {...props} className="calendar-custom" />
}
