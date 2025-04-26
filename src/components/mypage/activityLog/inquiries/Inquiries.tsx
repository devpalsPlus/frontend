import NoContent from '../../../common/noContent/NoContent';
import * as S from './Inquiries.styled';

export default function Inquiries() {
  return (
    <S.container>
      {/* <S.WrapperButton>
        <S.Button>FAQ</S.Button>
        <S.Button>문의하기</S.Button>
      </S.WrapperButton> */}
      <S.WrapperNoContent>
        <NoContent type='inquiries' />
      </S.WrapperNoContent>
    </S.container>
  );
}
