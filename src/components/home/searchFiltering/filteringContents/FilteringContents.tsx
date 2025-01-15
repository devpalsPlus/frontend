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
  const [selectSkills, setSelectSkills] = useState<string[]>([]);

  const handleSkillTagBoxToggle = () => {
    setSkillTagButtonToggle((prev) => {
      console.log('setSkillTagButtonToggle-prev', prev);

      return !prev;
    });
  };

  const handleSkillTagFilterClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const textContent = target.textContent;

    const id = target.dataset.id;
    if (!textContent || !id) return;

    handleUpdateFilters('skillTag', id);
  };

  const filteringRef = useOutsideClick(() => setSkillTagButtonToggle(false));

  return (
    <S.Container>
      <div
        className='filteringButton skillTagButton'
        onClick={handleSkillTagBoxToggle}
      >
        <button>
          언어선택
          <ChevronDownIcon />
        </button>
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
      {skillTagButtonToggle && (
        <div
          className='skillTagBox'
          onClick={handleSkillTagFilterClick}
          ref={filteringRef}
        >
          <SkillTagBox
            width='90%'
            selectSkills={selectSkills}
            setSelectSkills={setSelectSkills}
          />
        </div>
      )}
    </S.Container>
  );
}
