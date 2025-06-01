import { Outlet } from 'react-router-dom';
import AdminTitle from '../../../components/common/admin/title/AdminTitle';
import * as S from './AdminNotice.styled';

export default function AdminNotice() {
  return (
    <S.AdminNoticeContainer>
      <AdminTitle title='공지사항' />
      <Outlet />
    </S.AdminNoticeContainer>
  );
}
