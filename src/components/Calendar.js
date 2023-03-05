import Widget from "./Widget";
import "../styles/Calendar.scss";

function Calendar() {
  return (
    <div>
      <div className="calendar-wrapper">
        <div className="calendar-date">
          <span className="date"> Monday, 12th January 2022</span>
        </div>

        <div className="calendar-specifiers">
          <Widget>Day</Widget>
          <Widget>Month</Widget>
          <Widget>Year</Widget>
        </div>
        <div className="calendar-block"></div>
      </div>
    </div>
  );
}

export default Calendar;
