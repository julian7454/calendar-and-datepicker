import classNames from "classnames";
import { monthEN } from "./constant";
import { addYears, addMonths } from "./util";
import Head from "./Head";

export default function Month({
  date,
  currentDate,
  setCurrentDate,
  setShowType
}) {
  return (
    <>
      <Head
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        showType="year"
        setShowType={setShowType}
        addFn={addYears}
        title={currentDate.getFullYear()}
      />
      <ul className="calendar-list">
        {Object.keys(monthEN).map((month) => (
          <li
            key={month}
            className={classNames({
              "calendar-list__button": true,
              selected: date?.getMonth() + 1 === Number(month)
            })}
            onClick={() => {
              const toBeUpdatedMonth = month - (currentDate.getMonth() + 1);
              setCurrentDate(addMonths(toBeUpdatedMonth, currentDate));
              setShowType("day");
            }}
          >
            {monthEN[month]}
          </li>
        ))}
      </ul>
    </>
  );
}
