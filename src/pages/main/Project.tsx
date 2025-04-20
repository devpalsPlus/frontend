import { forwardRef } from 'react';
import ProjectImg from '../../assets/project.svg';
import * as S from './about.styled';

interface ProjectProps {
  ref?: React.Ref<HTMLDivElement>;
  isVisible: boolean;
}

const Project = forwardRef<HTMLDivElement, ProjectProps>(
  ({ isVisible }, ref) => {
    return (
      <S.Container ref={ref} $isVisible={isVisible}>
        <S.Title>✨ 다양한 프로젝트를 한눈에 제공</S.Title>
        <S.ImgWrapper>
          <S.Img src={ProjectImg} />
        </S.ImgWrapper>
        <S.Description>
          다양한 프로젝트를 <S.Bold>손쉽게</S.Bold> 한눈에 볼 수 있어요!
          <br />
          DEVPALS에선 <S.Bold>새싹배지</S.Bold>를 통해 초보 개발자들의{' '}
          <S.Bold>편리한 지원</S.Bold>이 가능해요.
        </S.Description>
      </S.Container>
    );
  }
);

export default Project;
