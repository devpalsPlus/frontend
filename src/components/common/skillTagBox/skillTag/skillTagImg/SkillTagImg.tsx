import * as S from './SkillTagImg.styled';

interface SkillTagImgProps {
  image: string;
  skillTag: string;
}
export default function SkillTagImg({ image, skillTag }: SkillTagImgProps) {
  return (
    <S.Container>
      <img src={image} alt={skillTag} />
    </S.Container>
  );
}
