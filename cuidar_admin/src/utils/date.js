export function getNow() {
  return new Date();
}

export function getFirstDayOfCurrentMonth() {
  const now = getNow();
  const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
  firstDay.setUTCHours(0, 0, 0);

  return firstDay;
}

export function getLastDayOfCurrentMonth() {
  const now = getNow();
  const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  lastDay.setUTCHours(23, 59, 59);

  return lastDay;
}
