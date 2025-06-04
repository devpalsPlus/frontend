import { Outlet } from 'react-router-dom';
import AdminTitle from '../../components/common/admin/title/AdminTitle';
import * as S from './CommonAdminPage.styled';

interface CommonAdminPageProps {
  title: string;
}

export default function CommonAdminPage({ title }: CommonAdminPageProps) {
  return (
    <S.AdminNoticeContainer>
      <AdminTitle title={title} />
      <Outlet />
    </S.AdminNoticeContainer>
  );
}
