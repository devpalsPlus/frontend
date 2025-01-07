import { ChevronDownIcon } from '@heroicons/react/24/outline';
import * as S from './Filtering.styled';
import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';

interface FilteringProps {
  selects: string[];
  defaultValue: string;
}

export default function Filtering({ selects, defaultValue }: FilteringProps) {
  const [defaultVal, setDefaultVal] = useState<string>(defaultValue);
  const handleValueClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    setDefaultVal(target.textContent || '');
  };
  return (
    <S.Container>
      <S.Wrapper>
        <div className="defaultValue">
          {defaultVal}
          <ChevronDownIcon />
        </div>
        <div className="select">
          {selects.map((select) => (
            <div className="option" key={uuid()} onClick={handleValueClick}>
              {select}
            </div>
          ))}
        </div>
      </S.Wrapper>
    </S.Container>
  );
}
