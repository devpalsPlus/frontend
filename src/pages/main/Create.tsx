import * as S from './About.styled';
import createImg from '../../assets/create.svg';
import { forwardRef } from 'react';
interface CreateProps {
  ref?: React.Ref<HTMLDivElement>;
  isVisible: boolean;
}

const Create = forwardRef<HTMLDivElement, CreateProps>(({ isVisible }, ref) => {
  return (
    <S.Container $isVisible={isVisible} ref={ref}>
      <S.Title>📝 심플한 모집작성</S.Title>
      <S.ImgWrapper>
        <S.Img src={createImg} />
      </S.ImgWrapper>
      <S.Description>
        누구라도 참여가능한 <S.Bold>다양한 언어 분야 모집</S.Bold>가능!
        <br />
        <S.Bold>모집글 작성</S.Bold>을 통해 나만의 프로젝트를 모집해보세요!
      </S.Description>
    </S.Container>
  );
});

export default Create;
