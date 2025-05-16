import * as S from './About.styled';
import manageImg from '../../../assets/manage_project.svg';
import { forwardRef } from 'react';
interface ManageProps {
  ref?: React.Ref<HTMLDivElement>;
  isVisible: boolean;
}
const Manage = forwardRef<HTMLDivElement, ManageProps>(({ isVisible }, ref) => {
  return (
    <S.Container $isVisible={isVisible} ref={ref}>
      <S.Title>💻🙋‍♂️ 편리한 지원자 관리</S.Title>
      <S.ImgWrapper>
        <S.Img src={manageImg} />
      </S.ImgWrapper>
      <S.Description>
        불편했던 지원방식은 이제 그만!
        <br />
        <S.Bold>지원자 현황, 정보</S.Bold>를 한눈에 확인가능해요.
      </S.Description>
    </S.Container>
  );
});

export default Manage;
