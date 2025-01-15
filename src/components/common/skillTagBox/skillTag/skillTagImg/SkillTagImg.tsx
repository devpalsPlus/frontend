import * as S from './SkillTagImg.styled';

export interface SkillTagImgProps {
  image: string;
  skillTag: string;
  $select?: boolean;
}
export default function SkillTagImg({
  image,
  skillTag,
  $select,
}: SkillTagImgProps) {
  return (
    <S.Wrapper $select={$select}>
      <img src={image} alt={skillTag} />
    </S.Wrapper>
  );
}
