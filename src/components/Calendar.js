import Widget from "./Widget";
import "../styles/Calendar.scss";

function Calendar() {
  return (
    <>
      <div className="calendar-wrapper">
        <div className="calendar-date">
          <span className="date"> Monday, 12th January 2022</span>
        </div>

        <div className="calendar-specifiers">
          <Widget id="3">Day</Widget>
          <Widget id="2-month">Month</Widget>
          <Widget id="3-year">Year</Widget>
        </div>
        <div className="calendar-block">infs</div>
      </div>
    </>
  );
}

export default Calendar;
