import * as S from './SkillTagImg.styled';

export interface SkillTagImgProps {
  image: string;
  skillTag: string;
  $select?: boolean;
  skillTagId?: number;
}
export default function SkillTagImg({
  image,
  skillTag,
  $select,
  skillTagId,
}: SkillTagImgProps) {
  return (
    <S.Wrapper $select={$select}>
      <S.SkillImg
        src={`${image}?t=${Date.now()}`}
        alt={skillTag}
        data-id={skillTagId}
      />
    </S.Wrapper>
  );
}
