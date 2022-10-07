export function addMonths(numOfMonths, date = new Date()) {
  const dateCopy = new Date(date.getTime());

  dateCopy.setMonth(dateCopy.getMonth() + numOfMonths);

  return dateCopy;
}

export function addYears(numOfYears, date = new Date()) {
  const dateCopy = new Date(date.getTime());

  dateCopy.setFullYear(dateCopy.getFullYear() + numOfYears);

  return dateCopy;
}

export function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

export function getDateString(date) {
  if (!date) {
    return;
  }
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;
}

const weekDays = [0, 1, 2, 3, 4, 5, 6];
const visibleWeeksCount = 6;

export function getMonthCalendar(date, currentDate) {
  const month = currentDate.getMonth();
  const cursor = new Date(currentDate.getFullYear(), month);
  const count = visibleWeeksCount * 7;

  cursor.setDate(cursor.getDate() - weekDays.indexOf(cursor.getDay()));

  const calendar = [];

  for (let i = 0; i < count; i++) {
    calendar.push({
      date: new Date(cursor),
      caurrentMonth: cursor.getMonth() === month,
      selected:
        cursor.getFullYear() === date?.getFullYear() &&
        cursor.getMonth() === date?.getMonth() &&
        cursor.getDate() === date?.getDate(),
      caurrentDay:
        cursor.getFullYear() === new Date().getFullYear() &&
        cursor.getMonth() === new Date().getMonth() &&
        cursor.getDate() === new Date().getDate()
    });
    cursor.setDate(cursor.getDate() + 1);
  }

  return calendar;
}
