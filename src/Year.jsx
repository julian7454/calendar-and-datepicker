import classNames from "classnames";
import { addYears } from "./util";
import Head from "./Head";

export default function Year({
  date,
  currentDate,
  setCurrentDate,
  setShowType
}) {
  const year = currentDate.getFullYear();
  const startYear = year - (year % 10);
  const endYear = startYear + 9;
  const years = [
    startYear - 1,
    ...Array.from({ length: 10 }, (v, k) => k + startYear),
    endYear + 1
  ];

  return (
    <>
      <Head
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        addFn={addYears}
        title={`${startYear} - ${endYear}`}
        time={10}
      />
      <ul className="calendar-list">
        {years.map((year) => (
          <li
            className={classNames({
              "calendar-list__button": true,
              selected: date?.getFullYear() === Number(year)
            })}
            onClick={() => {
              const toBeUpdatedYear = year - currentDate.getFullYear();
              setCurrentDate(addYears(toBeUpdatedYear, currentDate));
              setShowType("day");
            }}
          >
            {year}
          </li>
        ))}
      </ul>
    </>
  );
}
