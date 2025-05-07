import { ChevronDownIcon } from '@heroicons/react/24/outline';
import * as S from './Filtering.styled';
import { useEffect, useState } from 'react';
import type { MethodTag, PositionTag } from '../../../../../models/tags';
import { useOutsideClick } from '../../../../../hooks/useOutsideClick';
import { useSaveSearchFiltering } from '../../../../../hooks/useSaveSearchFiltering';
import { SEARCH_FILTERING_DEFAULT_VALUE } from '../../../../../constants/homeConstants';

interface FilteringProps {
  selects: PositionTag[] | MethodTag[];
  defaultValue: string;
}

export default function Filtering({ selects, defaultValue }: FilteringProps) {
  const { searchFilters, handleUpdateFilters } = useSaveSearchFiltering();
  const [changeValue, setChangeValue] = useState<string>(defaultValue);
  const [dropDownToggle, setDropDownToggle] = useState(false);
  const [addAll, setAddAll] = useState<MethodTag[] | PositionTag[]>([]);

  useEffect(() => {
    if (defaultValue === SEARCH_FILTERING_DEFAULT_VALUE.METHOD) {
      setAddAll([{ id: 0, name: '전체', createdAt: '' }, ...selects]);
    } else {
      setAddAll(selects);
    }
  }, [selects, defaultValue]);

  useEffect(() => {
    if (!selects.length) return;
    setChangeValue((prev) => {
      if (searchFilters.positionTag !== 0 || searchFilters.methodType !== 0) {
        if (defaultValue === SEARCH_FILTERING_DEFAULT_VALUE.POSITION) {
          const positionTag = selects.find(
            (data) => data.id === searchFilters.positionTag
          )?.name;

          return positionTag ?? SEARCH_FILTERING_DEFAULT_VALUE.METHOD;
        } else if (defaultValue === SEARCH_FILTERING_DEFAULT_VALUE.METHOD) {
          const methodTag = selects.find(
            (data) => data.id === searchFilters.methodType
          )?.name;

          return methodTag ?? SEARCH_FILTERING_DEFAULT_VALUE.METHOD;
        }
      }
      return prev;
    });
  }, [
    searchFilters.methodType,
    searchFilters.positionTag,
    selects,
    defaultValue,
  ]);

  const handleValueClick = async (tagName: string, tagId: number) => {
    setChangeValue(tagName);
    setDropDownToggle(false);

    if (defaultValue === SEARCH_FILTERING_DEFAULT_VALUE.POSITION) {
      handleUpdateFilters('positionTag', tagId);
    } else if (defaultValue === SEARCH_FILTERING_DEFAULT_VALUE.METHOD) {
      handleUpdateFilters('methodType', tagId);
    }
  };

  const handleDropDownToggle = () => {
    setDropDownToggle((prev) => !prev);
  };

  const filteringRef = useOutsideClick(() => setDropDownToggle(false));

  return (
    <S.Container>
      <S.Wrapper ref={filteringRef}>
        <S.RefWrapper>
          <S.DefaultValueButton
            onClick={handleDropDownToggle}
            $isOpen={dropDownToggle}
          >
            {changeValue}
            <ChevronDownIcon />
          </S.DefaultValueButton>
          {dropDownToggle && (
            <S.SelectWrapper>
              {addAll.map((select) => (
                <S.SelectButton
                  key={`${defaultValue}-${select.id}`}
                  onClick={() => handleValueClick(select.name, select.id)}
                >
                  {select.name}
                </S.SelectButton>
              ))}
            </S.SelectWrapper>
          )}
        </S.RefWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
