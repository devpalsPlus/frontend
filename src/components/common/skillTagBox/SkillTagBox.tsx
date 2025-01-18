import React from 'react';
import { useSearchFilteringSkillTag } from '../../../hooks/useSearchFilteringSkillTag';
import SkillTag from './skillTag/SkillTag';
import * as S from './SkillTagBox.styled';
import { UseFormSetValue } from 'react-hook-form';
import { CreateProjectFormValues } from '../../../models/createProject';

export interface SkillTagBoxProps {
  width: string;
  selectSkills: number[];
  setSelectSkills: React.Dispatch<React.SetStateAction<number[]>>;
  setValue: UseFormSetValue<CreateProjectFormValues>;
}

export default function SkillTagBox({
  width,
  selectSkills,
  setSelectSkills,
  setValue,
}: SkillTagBoxProps) {
  const { skillTagsData } = useSearchFilteringSkillTag();
  const handleAddSelectSkills = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const dataId = Number(target.dataset.id);
    if (!dataId) return;

    setSelectSkills((prev) => {
      const selectedSkills = prev.includes(dataId)
        ? prev.filter((prevId) => prevId !== dataId)
        : [...prev, dataId];

      setValue('languages', selectedSkills);
      return selectedSkills;
    });
  };

  return (
    <S.Container width={width} onClick={handleAddSelectSkills}>
      {skillTagsData?.map((skillTagData) => (
        <SkillTag
          skillTagData={skillTagData}
          key={skillTagData.id}
          $select={selectSkills.includes(skillTagData.id) ? true : false}
        />
      ))}
    </S.Container>
  );
}
