import Filtering from './filtering/Filtering';
import * as S from './FilteringContents.styled';
import beginner from '../../../../assets/beginner.svg';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import SkillTagBox from '../../../common/skillTagBox/SkillTagBox';
import React, { useState } from 'react';
import { useSearchFilteringSkillTag } from '../../../../hooks/useSearchFilteringSkillTag';
import { useOutsideClick } from '../../../../hooks/useOutsideClick';
import { useSaveSearchFiltering } from '../../../../hooks/useSaveSearchFiltering';
import { SEARCH_FILTERING_DEFAULT_VALUE } from '../../../../constants/homeConstants';

export default function FilteringContents() {
  const { positionTagsData, methodTagsData } = useSearchFilteringSkillTag();
  const { searchFilters, handleUpdateFilters } = useSaveSearchFiltering();
  const [skillTagButtonToggle, setSkillTagButtonToggle] = useState(false);

  const handleSkillTagBoxToggle = () => {
    setSkillTagButtonToggle((prev) => !prev);
  };

  const handleSkillTagFilterClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const target = e.target as HTMLElement;

    const id = Number(
      target.dataset.id || target.closest('[data-id]')?.getAttribute('data-id')
    );
    if (!id) return;

    handleUpdateFilters('skillTag', id);
  };

  const handleSkillTagReset = () => {
    handleUpdateFilters('skillTag', []);
  };

  const filteringRef = useOutsideClick(() => setSkillTagButtonToggle(false));
  if (!searchFilters.skillTag) return null;

  return (
    <S.Container>
      <div className='filteringButton skillTagButton' ref={filteringRef}>
        <button onClick={handleSkillTagBoxToggle}>
          언어선택
          <ChevronDownIcon />
        </button>
        {skillTagButtonToggle && (
          <div className='skillTagBox' onClick={handleSkillTagFilterClick}>
            <SkillTagBox
              width='130%'
              onHandleSkillTagReset={handleSkillTagReset}
              isMain={true}
            />
          </div>
        )}
      </div>
      <Filtering
        selects={positionTagsData}
        defaultValue={SEARCH_FILTERING_DEFAULT_VALUE.POSITION}
      />
      <Filtering
        selects={methodTagsData}
        defaultValue={SEARCH_FILTERING_DEFAULT_VALUE.METHOD}
      />
      <S.BeginnerDiv
        className='filteringButton beginnerButton'
        $toggle={searchFilters.isBeginner}
      >
        <button
          onClick={() =>
            handleUpdateFilters('isBeginner', !searchFilters.isBeginner)
          }
        >
          새싹 모집
          <img className='isBeginner' src={beginner} alt='plant' />
        </button>
      </S.BeginnerDiv>
    </S.Container>
  );
}
