import { ChevronDownIcon } from '@heroicons/react/24/outline';
import * as S from './Filtering.styled';
import { useState } from 'react';
import type { MethodTag, PositionTag } from '../../../../../models/tags';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import { useSaveSearchFiltering } from '../../../../../hooks/useSaveSearchFiltering';
import { SEARCH_FILTERING_DEFAULT_VALUE } from '../../../../../constants/homeConstants';

interface FilteringProps {
  selects: PositionTag[] | MethodTag[];
  defaultValue: string;
}

export default function Filtering({ selects, defaultValue }: FilteringProps) {
  const { handleUpdateFilters } = useSaveSearchFiltering();
  const [changeValue, setChangeValue] = useState<string>(defaultValue);
  const [dropDownToggle, setDropDownToggle] = useState(false);

  const handleValueClick = async (tagName: string, tagId: number) => {
    setChangeValue(tagName);
    setDropDownToggle(false);

    if (defaultValue === SEARCH_FILTERING_DEFAULT_VALUE.POSITION) {
      handleUpdateFilters('positionTag', tagId);
    } else if (defaultValue === SEARCH_FILTERING_DEFAULT_VALUE.METHOD) {
      handleUpdateFilters('method', tagId);
    }
  };

  const handleDropDownToggle = () => {
    setDropDownToggle((prev) => !prev);
  };

  const filteringRef = useOutsideClick(() => setDropDownToggle(false));

  return (
    <S.Container>
      <S.Wrapper ref={filteringRef}>
        <div className='refWrapper'>
          <button className='defaultValue' onClick={handleDropDownToggle}>
            {changeValue}
            <ChevronDownIcon />
          </button>
          {dropDownToggle && (
            <div className='select'>
              {selects.map((select) => (
                <div
                  className='option'
                  key={select.id}
                  onClick={() => handleValueClick(select.name, select.id)}
                >
                  {select.name}
                </div>
              ))}
            </div>
          )}
        </div>
      </S.Wrapper>
    </S.Container>
  );
}
