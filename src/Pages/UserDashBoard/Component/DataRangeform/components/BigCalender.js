import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment)
// const localizer = momentLocalizer(moment);

const BigCalender = () => {
    return (
        <>
        <Calendar
        localizer={localizer}
        
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      </>
    );
    }
export default BigCalender;