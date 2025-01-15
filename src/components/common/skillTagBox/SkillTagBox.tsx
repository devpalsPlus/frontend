import React from 'react';
import { useSearchFilteringSkillTag } from '../../../hooks/useSearchFilteringSkillTag';
import SkillTag from './skillTag/SkillTag';
import * as S from './SkillTagBox.styled';

export interface SkillTagBoxProps {
  width: string;
  selectSkills: string[];
  setSelectSkills: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function SkillTagBox({
  width,
  selectSkills,
  setSelectSkills,
}: SkillTagBoxProps) {
  const { skillTagsData } = useSearchFilteringSkillTag();
  const handleAddSelectSkills = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;
    const dataId = target.dataset.id;
    if (!dataId) return;

    setSelectSkills((prev) => {
      return prev.includes(dataId)
        ? prev.filter((prevId) => prevId !== dataId)
        : [...prev, dataId];
    });
  };

  return (
    <S.Container width={width} onClick={handleAddSelectSkills}>
      {skillTagsData?.map((skillTagData) => (
        <SkillTag
          skillTagData={skillTagData}
          key={skillTagData.id}
          $select={
            selectSkills.includes(skillTagData.id.toString()) ? true : false
          }
        />
      ))}
    </S.Container>
  );
}
