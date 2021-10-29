import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";

const events = [
  {
    title: "Live Class",
    start: new Date(2021, 9, 7),
    end: new Date(2021, 9, 7),
  },
  {
    title: "Demo Class",
    start: new Date(2021, 9, 8),
    end: new Date(2021, 9, 8),
  },
];

const localizer = momentLocalizer(moment);

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor='start'
      endAccessor='end'
      style={{ height: 500 }}
    />
  </div>
);

export default MyCalendar;
