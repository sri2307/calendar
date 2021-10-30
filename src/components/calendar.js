import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import GoogleCalendar from "./GoogleCalendar";

const events = [
  {
    title: "Live Class",
    start: new Date(2021, 9, 7),
    end: new Date(2021, 9, 7),
    category: "live",
  },
  {
    title: "Demo Class",
    start: new Date(2021, 9, 8),
    end: new Date(2021, 9, 8),
    category: "announcements",
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
      eventPropGetter={(event) => {
        const backgroundColor = event.category === "live" ? "red" : "blue";
        return { style: { backgroundColor } };
      }}
      style={{ height: 500 }}
    />
    <GoogleCalendar />
  </div>
);

export default MyCalendar;
