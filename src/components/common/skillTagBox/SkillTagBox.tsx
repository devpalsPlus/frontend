import React, { useEffect } from 'react';
import { useSearchFilteringSkillTag } from '../../../hooks/useSearchFilteringSkillTag';
import SkillTag from './skillTag/SkillTag';
import * as S from './SkillTagBox.styled';
import { UseFormSetValue } from 'react-hook-form';
import { CreateProjectFormValues } from '../../../models/createProject';
import { SkillTag as SkillTagType } from '../../../models/tags';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import { useSaveSearchFiltering } from '../../../hooks/useSaveSearchFiltering';

export interface SkillTagBoxProps {
  width: string;
  selectSkills: number[];
  setSelectSkills: React.Dispatch<React.SetStateAction<number[]>>;
  setValue?: UseFormSetValue<CreateProjectFormValues>;
  apiDataSkillTags?: SkillTagType[];
  onHandleSkillTagReset?: React.MouseEventHandler<HTMLButtonElement>;
  isMain?: boolean;
  isCreate?: boolean;
}

export default function SkillTagBox({
  width,
  selectSkills,
  setSelectSkills,
  setValue,
  apiDataSkillTags,
  onHandleSkillTagReset,
  isMain = false,
  isCreate = false,
}: SkillTagBoxProps) {
  const { skillTagsData } = useSearchFilteringSkillTag();
  const { searchFilters } = useSaveSearchFiltering();
  const searchFiltersSkillTag = searchFilters.skillTag;

  // useEffect(() => {
  //   if (searchFilters.skillTag?.length) {
  //     setSelectSkills(searchFilters.skillTag);
  //   }
  // }, [searchFilters.skillTag, setSelectSkills]);

  const handleAddSelectSkills = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const dataId = Number(
      target.dataset.id || target.closest('[data-id]')?.getAttribute('data-id')
    );
    if (!dataId) return;

    setSelectSkills((prev) => {
      const selectedSkills = prev.includes(dataId)
        ? prev.filter((prevId) => prevId !== dataId)
        : [...prev, dataId];

      setValue?.('languages', selectedSkills);
      return selectedSkills;
    });
  };

  useEffect(() => {
    const skillTagList: number[] = [];
    apiDataSkillTags?.map((tag) => {
      skillTagList.push(tag.id);
    });
    setValue?.('languages', skillTagList);
    setSelectSkills(skillTagList);
  }, [apiDataSkillTags]);

  return (
    <S.Container width={width} onClick={handleAddSelectSkills}>
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
                  (isCreate && selectSkills.includes(skillTagData.id))
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
