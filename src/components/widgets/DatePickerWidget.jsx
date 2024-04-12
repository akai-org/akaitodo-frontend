import React, { useState } from 'react';
import '#src/styles/components/widgets/DatePickerWidget.scss';

const DatePickerWidget = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const months1 = [ 'January', 'April', 'July', 'October'];
  const months2 = [ 'February', 'May', 'August', 'November'];
  const months3 = [ 'March', 'June', 'September', 'December'];

  const [selectedDate, setSelectedDate] = useState('');

  const currentDate = new Date();
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const startDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const [mode, setMode] = useState('day');

  const generateCalendarDays = () => {
    const firstDayBlankSpaces = new Array(startDayOfMonth).fill(null);
    const daysArray = [
      ...firstDayBlankSpaces,
      ...Array(daysInMonth).fill().map((_, index) => index + 1),
    ];
  
    return daysArray.map((day, index) => (
      <div key={index} className="day" onClick={() => handleDateClick(day)}>
        {day || ''}
      </div>
    ));
  };  

  const handleDateClick = (day) => {
    if (day === null) return;
    const clickedDate = new Date(currentYear, currentMonth, day);
    const formattedDate = `${day} ${months[currentMonth]} ${currentYear}`;
    setSelectedDate(formattedDate);
    // logika obsługi wyboru daty
  };

  const nextMonth = () => {
    setCurrentMonth(prevMonth => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear(prevYear => (currentMonth === 11 ? prevYear + 1 : prevYear));
  };

  const prevMonth = () => {
    setCurrentMonth(prevMonth => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear(prevYear => (currentMonth === 0 ? prevYear - 1 : prevYear));
  };

  const nextYear = () => {
    setCurrentYear(currentYear + 20);
  };

  const prevYear = () => {
    setCurrentYear(currentYear - 20);
  };

  const changeYear = () => {
    setMode('year');
  };

  const changeMonth = () => {
    setMode('month');
  };

  const renderDays = () => {

    switch (mode) {
      case 'month':
        return (
        <div>

            <div className="header">
                <span onClick={changeMonth} className="month">{months[currentMonth]} </span>
                <span onClick={changeYear} className="year">{currentYear}</span>
                <span onClick={prevMonth} className="prev">{"‹"}</span>
                <span onClick={nextMonth} className="next">{"›"}</span>
            </div>

            <div className="spacer"></div>

            <div className="months-wrapper">
              <div className="columns">
                  <div className="column">
                      {months1.map((month, index) => (
                      <div key={index} className='monthitem' onClick={() => handleMonthClick(index*3)}>{month}</div>
                      ))}
                  </div>
                  <div className="column">
                      {months2.map((month, index) => (
                      <div key={index} className='monthitem' onClick={() => handleMonthClick(index*3+1)}>{month}</div>
                      ))}
                  </div>
                  <div className="column">
                      {months3.map((month, index) => (
                      <div key={index} className='monthitem' onClick={() => handleMonthClick(index*3+2)}>{month}</div>
                      ))}
                  </div>
              </div>
              {/* <div className="months">
                {months.map((monthName, index) => {
                  const isCurrentMonth = index === currentMonth;
                  return (
                    <div
                      key={index}
                    //   className={`${isCurrentMonth ? 'current-month' : 'month'}`}
                      className='month'
                      onClick={() => handleMonthClick(index)}
                    >
                      {monthName}
                    </div>
                  );
                })}
              </div> */}
            </div>

        </div>
          );
          
      case 'year':
        return (
        <div>

            <div className="header">
                <span onClick={changeMonth} className="month">{months[currentMonth]} </span>
                <span onClick={changeYear} className="year">{currentYear}</span>
                <span onClick={prevYear} className="prev">{"‹"}</span>
                <span onClick={nextYear} className="next">{"›"}</span>
            </div>

            <div className="spacer"></div>

            <div className="years-wrapper">

              <div className="years">
                {Array(20).fill().map((_, index) => {
                  const year = currentYear - 8 + index;
                  const isCurrentYear = year === currentYear;
                  return (
                    <div
                      key={index}
                    //   className={`${isCurrentYear ? 'current-year' : 'year'}`}
                      className='year'
                      onClick={() => handleYearClick(year)}
                    >
                      {year}
                    </div>
                  );
                })}
              </div>

            </div>

        </div>
          );      

      default:
        return (
        <div>

            <div className="header">
                <span onClick={changeMonth} className="month">{months[currentMonth]} </span>
                <span onClick={changeYear} className="year">{currentYear}</span>
                <span onClick={prevMonth} className="prev">{"‹"}</span>
                <span onClick={nextMonth} className="next">{"›"}</span>
            </div>

            <div className="days-name">
                {days.map((day, index) => (
                    <div key={index} className="day-name">
                    {day}
                    </div>
                ))}
            </div>

            <div className="days-wrapper">
                <div className="days">
                    {generateCalendarDays()}
                </div>
            </div>

        </div>
        );
    }
  };

  const handleMonthClick = (selectedMonth) => {
    setCurrentMonth(selectedMonth);
    setMode('day');
  };

  const handleYearClick = (selectedYear) => {
    setCurrentYear(selectedYear);
    setMode('day');
  };

  return (
    <div className="calendar">
      {renderDays()}
      <div className="selected-date">Selected Date: {selectedDate}</div>
    </div>
  );
};

export default DatePickerWidget;
