import React from 'react';
import { useSearchFilteringSkillTag } from '../../../hooks/useSearchFilteringSkillTag';
import SkillTag from './skillTag/SkillTag';
import * as S from './SkillTagBox.styled';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { useSaveSearchFiltering } from '../../../hooks/useSaveSearchFiltering';

export interface SkillTagBoxProps {
  width: string;
  onHandleSkillTagReset?: React.MouseEventHandler<HTMLButtonElement>;
  selectedTag?: number[];
  isMain?: boolean;
  isCreate?: boolean;
}

export default function SkillTagBox({
  width,
  onHandleSkillTagReset,
  selectedTag,
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
          <S.SkillTagWrapper>
            {skillTagsData
              .filter((skill) => skill.id !== 0)
              .map((skillTagData) => (
                <SkillTag
                  skillTagData={skillTagData}
                  key={`skillTagBox-${skillTagData.id}`}
                  $select={
                    (isMain &&
                      searchFiltersSkillTag?.includes(skillTagData.id)) ||
                    (isCreate && selectedTag?.includes(skillTagData.id))
                      ? true
                      : false
                  }
                />
              ))}
          </S.SkillTagWrapper>
          {isMain && Boolean(searchFiltersSkillTag?.length) && (
            <S.ButtonWrapper>
              <S.ResetButton onClick={onHandleSkillTagReset}>
                <ArrowUturnLeftIcon />
                <S.ResetSpan>초기화</S.ResetSpan>
              </S.ResetButton>
            </S.ButtonWrapper>
          )}
        </S.Wrapper>
      )}
    </S.Container>
  );
}
