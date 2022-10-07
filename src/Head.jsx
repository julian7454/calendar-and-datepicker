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
        <i className="fa-angle-left fa-solid"></i>
      </span>
      <span className="calendar-date" onClick={() => showType && setShowType(showType)}>{title}</span>
      <span onClick={() => setCurrentDate(addFn(time, currentDate))}>
        <i className="fa-angle-right fa-solid"></i>
      </span>
    </h3>
  );
}
