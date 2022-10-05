import "./styles.scss";
import "normalize.css";

import { useState, useEffect } from "react";
import Day from "./Day";
import Month from "./Month";
import Year from "./Year";
import DatePicker from "./DatePicker";
import { getMonthCalendar } from "./util";

export default function Calendar({ date: initDate, onSelect }) {
  const [showType, setShowType] = useState("day");
  // 以起始日作為月份顯示的指標
  const [currentDate, setCurrentDate] = useState(new Date());
  const [date, setDate] = useState(initDate);
  const [show, setShow] = useState(false);

  const calendar = getMonthCalendar(date, currentDate);

  useEffect(() => {
    if (!date) {
      return;
    }

    onSelect(date);
    setCurrentDate(date);
    setShow(false);
  }, [date, onSelect]);

  return (
    <>
      <DatePicker date={date} setDate={setDate} setShow={setShow} />

      {show && (
        <div className="calendar">
          {showType === "day" && (
            <Day
              calendar={calendar}
              date={date}
              setDate={setDate}
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              setShowType={setShowType}
            />
          )}
          {showType === "month" && (
            <Month
              date={date}
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              setShowType={setShowType}
            />
          )}
          {showType === "year" && (
            <Year
              date={date}
              currentDate={currentDate}
              setCurrentDate={setCurrentDate}
              setShowType={setShowType}
            />
          )}
        </div>
      )}
    </>
  );
}
