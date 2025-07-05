import * as S from './RadioGroup.styled';

interface RadioGroupProps {
  name: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const RadioGroup = ({ name, value, onChange }: RadioGroupProps) => (
  <S.RadioGroup>
    <S.RadioInput
      type='radio'
      id={`always-${name}`}
      name={`expType-${name}`}
      checked={value}
      onChange={() => onChange(true)}
    />
    <S.RadioLabel htmlFor={`always-${name}`}>상시 노출</S.RadioLabel>
    <S.RadioInput
      type='radio'
      id={`period-${name}`}
      name={`expType-${name}`}
      checked={!value}
      onChange={() => onChange(false)}
    />
    <S.RadioLabel htmlFor={`period-${name}`}>기간 노출</S.RadioLabel>
  </S.RadioGroup>
);

export default RadioGroup;
