import { isAfter } from 'date-fns';

export const isHappyHour = date => {
  const hhStart = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 17, 0, 0);
  const hhEnd = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 19, 0, 0);
  return isAfter(date, hhStart) && isAfter(hhEnd, date);
};
