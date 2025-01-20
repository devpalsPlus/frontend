import React, { useEffect } from 'react';
import { useSearchFilteringSkillTag } from '../../../hooks/useSearchFilteringSkillTag';
import SkillTag from './skillTag/SkillTag';
import * as S from './SkillTagBox.styled';
import { UseFormSetValue } from 'react-hook-form';
import { CreateProjectFormValues } from '../../../models/createProject';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';

export interface SkillTagBoxProps {
  width: string;
  selectSkills: number[];
  setSelectSkills: React.Dispatch<React.SetStateAction<number[]>>;
  setValue?: UseFormSetValue<CreateProjectFormValues>;
  reset?: boolean;
  onHandleSkillTagReset: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SkillTagBox({
  width,
  selectSkills,
  setSelectSkills,
  setValue,
  reset = false,
  onHandleSkillTagReset,
}: SkillTagBoxProps) {
  const { skillTagsData } = useSearchFilteringSkillTag();

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

  return (
    <S.Container width={width} onClick={handleAddSelectSkills}>
      <S.Wrapper>
        <div className='skillTagWrapper'>
          {skillTagsData?.map((skillTagData) => (
            <SkillTag
              skillTagData={skillTagData}
              key={skillTagData.id}
              $select={selectSkills.includes(skillTagData.id) ? true : false}
            />
          ))}
        </div>
        {Boolean(reset) && Boolean(selectSkills.length) && (
          <div className='buttonWrapper'>
            <button className='resetButton' onClick={onHandleSkillTagReset}>
              <ArrowUturnLeftIcon />
              <span>초기화</span>
            </button>
          </div>
        )}
      </S.Wrapper>
    </S.Container>
  );
}
