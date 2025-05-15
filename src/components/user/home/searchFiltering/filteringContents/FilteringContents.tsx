import Filtering from './filtering/Filtering';
import * as S from './FilteringContents.styled';
import beginner from '../../../../assets/beginner.svg';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import SkillTagBox from '../../../../common/skillTagBox/SkillTagBox';
import React, { useState } from 'react';
import { useSearchFilteringSkillTag } from '../../../../../hooks/user/useSearchFilteringSkillTag';
import { useOutsideClick } from '../../../../../hooks/user/useOutsideClick';
import { useSaveSearchFiltering } from '../../../../../hooks/user/useSaveSearchFiltering';
import { SEARCH_FILTERING_DEFAULT_VALUE } from '../../../../../constants/user/homeConstants';

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
      <S.SkillTagButtonWrapper ref={filteringRef}>
        <S.SkillTagButton
          onClick={handleSkillTagBoxToggle}
          $isOpen={skillTagButtonToggle}
        >
          언어선택
          <ChevronDownIcon />
        </S.SkillTagButton>
        {skillTagButtonToggle && (
          <S.SkillTagBoxWrapper onClick={handleSkillTagFilterClick}>
            <SkillTagBox
              width='100%'
              onHandleSkillTagReset={handleSkillTagReset}
              isMain={true}
            />
          </S.SkillTagBoxWrapper>
        )}
      </S.SkillTagButtonWrapper>
      <Filtering
        selects={positionTagsData}
        defaultValue={SEARCH_FILTERING_DEFAULT_VALUE.POSITION}
      />
      <Filtering
        selects={methodTagsData}
        defaultValue={SEARCH_FILTERING_DEFAULT_VALUE.METHOD}
      />
      <S.BeginnerButtonWrapper $toggle={searchFilters.isBeginner}>
        <S.BeginnerButton
          $toggle={searchFilters.isBeginner}
          onClick={() =>
            handleUpdateFilters('isBeginner', !searchFilters.isBeginner)
          }
        >
          새싹 모집
          <S.BeginnerImg src={beginner} alt='plant' />
        </S.BeginnerButton>
      </S.BeginnerButtonWrapper>
    </S.Container>
  );
}
