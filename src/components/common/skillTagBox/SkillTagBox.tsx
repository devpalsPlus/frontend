import React, { useEffect } from 'react';
import { useSearchFilteringSkillTag } from '../../../hooks/useSearchFilteringSkillTag';
import SkillTag from './skillTag/SkillTag';
import * as S from './SkillTagBox.styled';
import { UseFormSetValue } from 'react-hook-form';
import { CreateProjectFormValues } from '../../../models/createProject';
import { SkillTag as SkillTagType } from '../../../models/tags';

export interface SkillTagBoxProps {
  width: string;
  selectSkills: number[];
  setSelectSkills: React.Dispatch<React.SetStateAction<number[]>>;
  setValue?: UseFormSetValue<CreateProjectFormValues>;
  apiDataSkillTags?: SkillTagType[];
}

export default function SkillTagBox({
  width,
  selectSkills,
  setSelectSkills,
  setValue,
  apiDataSkillTags,
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
