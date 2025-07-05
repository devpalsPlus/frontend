import BannerList from '../../../components/admin/banner/BannerList';
import AdminTitle from '../../../components/common/admin/title/AdminTitle';
import * as S from './AdminBanner.styled';

export default function AdminBanner() {
  return (
    <S.Container>
      <AdminTitle title='배너 관리' />
      <BannerList />
    </S.Container>
  );
}
