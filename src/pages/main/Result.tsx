import * as S from './about.styled';
import resultImg from '../../assets/result_project.svg';
import { forwardRef } from 'react';
interface ResultProps {
  ref?: React.Ref<HTMLDivElement>;
  isVisible: boolean;
}
const Result = forwardRef<HTMLDivElement, ResultProps>(({ isVisible }, ref) => {
  return (
    <S.Container $isVisible={isVisible} ref={ref}>
      <S.Title>📧 지원한 프로젝트 알림 제공</S.Title>
      <S.ImgWrapper>
        <S.Img src={resultImg} />
      </S.ImgWrapper>
      <S.Description>
        <S.Bold>지원 프로젝트 현황</S.Bold>을 한눈에 확인가능!
        <br />
        <S.Bold>지원한 프로젝트</S.Bold>에 대한 알림을 제공해요.
      </S.Description>
    </S.Container>
  );
});

export default Result;
