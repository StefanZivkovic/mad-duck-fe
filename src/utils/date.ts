const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

/**
 * return desired format is - Thursday, Apr 07.
 */
export const dayRenderFormat = (date: string | Date) => {
  console.log(date);
  const d = new Date(date);
  const dayOfWeek = d.getDay();
  let dayOfMonth = d.getDate().toString();
  const month = d.getMonth();

  if (parseInt(dayOfMonth) < 10) {
    dayOfMonth = `0${dayOfMonth}`;
  }
  return `${days[dayOfWeek]}, ${months[month]} ${dayOfMonth}.`;
};
