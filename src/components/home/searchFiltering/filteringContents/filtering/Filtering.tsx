import { ChevronDownIcon } from '@heroicons/react/24/outline';
import * as S from './Filtering.styled';
import { v4 as uuid } from 'uuid';
import React, { useEffect, useRef, useState } from 'react';

interface FilteringProps {
  selects: string[];
  defaultValue: string;
}

export default function Filtering({ selects, defaultValue }: FilteringProps) {
  const [defaultVal, setDefaultVal] = useState<string>(defaultValue);
  const [dropDownToggle, setDropDownToggle] = useState(false);
  const filteringRef = useRef<HTMLDivElement>(null);

  const handleValueClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    setDefaultVal(target.textContent || '');
  };
  const handleDropDownToggle = () => {
    setDropDownToggle((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        filteringRef.current &&
        !filteringRef.current.contains(e.target as Node)
      ) {
        setDropDownToggle(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [filteringRef]);

  return (
    <S.Container>
      <S.Wrapper>
        <div
          className='defaultValue'
          ref={filteringRef}
          onClick={handleDropDownToggle}
        >
          {defaultVal}
          <ChevronDownIcon />
        </div>
        {dropDownToggle && (
          <div className='select'>
            {selects.map((select) => (
              <div className='option' key={uuid()} onClick={handleValueClick}>
                {select}
              </div>
            ))}
          </div>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
