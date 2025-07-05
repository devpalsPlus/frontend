import * as S from './DateRange.styled';
import { ChangeEvent } from 'react';

interface DateRangeProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  placeholder?: {
    start?: string;
    end?: string;
  };
}

const DateRange = ({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  placeholder,
}: DateRangeProps) => (
  <S.DateRange>
    <S.DateInput
      type='date'
      placeholder={placeholder?.start}
      value={startDate}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onStartDateChange(e.target.value)
      }
    />
    <S.DateSeparator>~</S.DateSeparator>
    <S.DateInput
      type='date'
      placeholder={placeholder?.end}
      value={endDate}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onEndDateChange(e.target.value)
      }
    />
  </S.DateRange>
);

export default DateRange;
