import { format, parseISO } from 'date-fns';

export const formatDate = (date: string) => {
  const isoDate = date;
  return format(parseISO(isoDate), 'yyyy.MM.dd');
};
