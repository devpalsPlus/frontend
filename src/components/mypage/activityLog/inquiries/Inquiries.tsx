import NoContent from '../../../common/noContent/NoContent';
import * as S from './Inquiries.styled';

export default function Inquiries() {
  return (
    <S.container>
      <S.WrapperNoContent>
        <NoContent type='inquiries' />
      </S.WrapperNoContent>
    </S.container>
  );
}
