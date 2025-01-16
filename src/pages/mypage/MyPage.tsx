import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/common/sidebar/Sidebar';
import * as S from './MyPage.styled';

const MyPage = () => {
  return (
    <S.Container>
      <Sidebar />
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
    </S.Container>
  );
};

export default MyPage;
