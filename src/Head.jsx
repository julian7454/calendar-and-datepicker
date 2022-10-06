import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Head({
  currentDate,
  setCurrentDate,
  addFn,
  title,
  time = 1,
  showType,
  setShowType
}) {
  return (
    <h3 className="calendar-title">
      <span onClick={() => setCurrentDate(addFn(-time, currentDate))}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </span>
      <span className="calendar-date" onClick={() => showType && setShowType(showType)}>{title}</span>
      <span onClick={() => setCurrentDate(addFn(time, currentDate))}>
        <FontAwesomeIcon icon={faAngleRight} />
      </span>
    </h3>
  );
}
