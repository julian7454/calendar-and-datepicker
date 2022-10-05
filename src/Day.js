import classNames from "classnames";
import { monthEN } from "./constant";
import { addMonths } from "./util";
import Head from "./Head";

function formatDate(d) {
  return `${d.date.getDate()}`;
}

export default function Day({
  calendar,
  setDate,
  setShowType,
  currentDate,
  setCurrentDate
}) {
  return (
    <>
      <Head
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        showType="month"
        setShowType={setShowType}
        addFn={addMonths}
        title={`${
          monthEN[currentDate.getMonth() + 1]
        } ${currentDate.getFullYear()}`}
      />
      <ul className="calendar-list">
        <li className="week">Su</li>
        <li className="week">Mo</li>
        <li className="week">Tu</li>
        <li className="week">We</li>
        <li className="week">Th</li>
        <li className="week">Fr</li>
        <li className="week">Sa</li>
      </ul>
      <ul className="calendar-list">
        {calendar.map((day) => (
          <li
            key={day.date}
            onClick={() => {
              setDate(day.date);
            }}
            className={classNames({
              day,
              current: day.caurrentMonth,
              active: day.caurrentDay,
              selected: day.selected
            })}
          >
            {formatDate(day)}
          </li>
        ))}
      </ul>
    </>
  );
}
