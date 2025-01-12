import { ChevronDownIcon } from '@heroicons/react/24/outline';
import * as S from './Filtering.styled';
import React, { useState } from 'react';
import type { MethodTag, PositionTag } from '../../../../../models/tags';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';

interface FilteringProps {
  selects: PositionTag[] | MethodTag[];
  defaultValue: string;
}

export default function Filtering({ selects, defaultValue }: FilteringProps) {
  const [changeValue, setChangeValue] = useState<string>(defaultValue);
  const [dropDownToggle, setDropDownToggle] = useState(false);

  const handleValueClick = (tagName: string) => {
    setChangeValue(tagName);
  };

  const handleDropDownToggle = () => {
    setDropDownToggle((prev) => !prev);
  };

  const filteringRef = useOutsideClick(() => setDropDownToggle(false));

  return (
    <S.Container>
      <S.Wrapper>
        <div className='defaultValue' onClick={handleDropDownToggle}>
          {changeValue}
          <ChevronDownIcon />
        </div>
        {dropDownToggle && (
          <div className='select' ref={filteringRef}>
            {selects.map((select) => (
              <div
                className='option'
                key={select.id}
                onClick={() => handleValueClick(select.name)}
              >
                {select.name}
              </div>
            ))}
          </div>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
