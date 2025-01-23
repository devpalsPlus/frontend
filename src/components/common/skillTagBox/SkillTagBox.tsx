import React from 'react';
import { useSearchFilteringSkillTag } from '../../../hooks/useSearchFilteringSkillTag';
import SkillTag from './skillTag/SkillTag';
import * as S from './SkillTagBox.styled';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { useSaveSearchFiltering } from '../../../hooks/useSaveSearchFiltering';

export interface SkillTagBoxProps {
  width: string;
  onHandleSkillTagReset?: React.MouseEventHandler<HTMLButtonElement>;
  isMain?: boolean;
  isCreate?: boolean;
}

export default function SkillTagBox({
  width,
  onHandleSkillTagReset,
  isMain = false,
  isCreate = false,
}: SkillTagBoxProps) {
  const { skillTagsData } = useSearchFilteringSkillTag();
  const { searchFilters } = useSaveSearchFiltering();
  const searchFiltersSkillTag = searchFilters.skillTag;

  return (
    <S.Container width={width}>
      {Boolean(skillTagsData.length) && (
        <S.Wrapper>
          <div className='skillTagWrapper'>
            {skillTagsData?.map((skillTagData) => (
              <SkillTag
                skillTagData={skillTagData}
                key={skillTagData.id}
                $select={
                  (isMain &&
                    searchFiltersSkillTag?.includes(skillTagData.id)) ||
                  (isCreate && searchFiltersSkillTag?.includes(skillTagData.id))
                    ? true
                    : false
                }
              />
            ))}
          </div>
          {isMain && Boolean(searchFiltersSkillTag?.length) && (
            <div className='buttonWrapper'>
              <button className='resetButton' onClick={onHandleSkillTagReset}>
                <ArrowUturnLeftIcon />
                <span>초기화</span>
              </button>
            </div>
          )}
        </S.Wrapper>
      )}
    </S.Container>
  );
}
