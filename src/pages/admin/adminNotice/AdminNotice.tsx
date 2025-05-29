import AdminTitle from '../../../components/common/admin/title/AdminTitle';
import * as S from './AdminNotice.styled';

export default function AdminNotice() {
  console.log('공지사항 렌더');

  return (
    <S.Container>
      <AdminTitle title='공지사항' />
    </S.Container>
  );
}
