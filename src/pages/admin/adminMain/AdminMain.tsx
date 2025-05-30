import React from 'react';
import * as S from './AdminMain.styled';
import MainCard from '../../../components/admin/mainCard/MainCard';
import AdminInquires from '../adminInquiries/AdminInquiries';
import GraphCard from '../../../components/admin/mainCard/graphCard/GraphCard';
import AdminAllUser from '../adminAllUser/AdminAllUser';
import AdminReports from '../adminReports/AdminReports';
import AdminNotice from '../adminNotice/AdminNotice';

const Main = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <MainCard>
          <AdminNotice />
        </MainCard>
        <MainCard>
          <AdminInquires />
        </MainCard>
        <MainCard>
          <AdminReports />
        </MainCard>
        <S.GraphArea>
          <GraphCard />
        </S.GraphArea>
        <MainCard>
          <AdminAllUser />
        </MainCard>
      </S.Wrapper>
    </S.Container>
  );
};

export default Main;
