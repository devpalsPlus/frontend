import React from 'react';
import * as S from './OptionBox.styled';

interface OptionBoxProps {
  id: number;
  label: string;
  type: 'checkbox' | 'radio';
  isSelected: boolean;
  onChange: (id: number, isChecked?: boolean) => void;
  imgSrc?: string;
}

const OptionBox = ({
  id,
  label,
  type,
  isSelected,
  onChange,
  imgSrc,
}: OptionBoxProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    onChange(id, isChecked);
  };

  return (
    <S.OptionLabel $isSelected={isSelected}>
      <S.HiddenInput
        type={type}
        value={id}
        checked={isSelected}
        onChange={handleChange}
      />
      {imgSrc && <img src={imgSrc} alt={label} width='40' height='40' />}
      <span>{label}</span>
    </S.OptionLabel>
  );
};

export default OptionBox;
