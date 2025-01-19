import * as S from './SkillTagImg.styled';

export interface SkillTagImgProps {
  image: string;
  skillTag: string;
  $select?: boolean;
  id: number;
}
export default function SkillTagImg({
  image,
  skillTag,
  $select,
  id,
}: SkillTagImgProps) {
  return (
    <S.Wrapper $select={$select}>
      <img src={image} alt={skillTag} data-id={id} />
    </S.Wrapper>
  );
}
