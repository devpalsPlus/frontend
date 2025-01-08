import * as S from './SkillTagImg.styled';

interface SkillTagImg {
  image: string;
  skillTag: string;
}
export default function SkillTagImg({ image, skillTag }) {
  return (
    <S.Container>
      <img src={image} alt={skillTag} />
    </S.Container>
  );
}
