import { useState, useEffect } from "react";
import { getDateString, isValidDate } from "./util";

export default function DatePicker({ date, setDate, setShow }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (!date) {
      return;
    }

    setInput(getDateString(date));
  }, [date]);

  return (
    <div className="datePicker">
      <i className="fa-calendar-days fa-solid"></i>
      <input
        type="text"
        name="date"
        value={input}
        onClick={() => {
          setShow(true);
        }}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onBlur={() => {
          const newDate = new Date(input);
          if (
            isValidDate(newDate) &&
            getDateString(newDate) !== getDateString(date)
          ) {
            setDate(newDate);
          }
        }}
      />
    </div>
  );
}
