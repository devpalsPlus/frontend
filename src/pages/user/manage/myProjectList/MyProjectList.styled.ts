import styled from 'styled-components';
import { WrapperNoContent } from '../../../../components/user/mypage/notifications/all/All.styled';

export const WrapperNoContentMyProjectList = styled(WrapperNoContent)`
  height: 80vh;
  justify-content: center;
`;

export const ManageProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const ManageProjectsWrapper = styled.div`
  width: 100%;
  display: block;
  padding-top: 4.375em;
  max-width: 1048px;
  margin: 0 30px;
  @media ${({ theme }) => theme.mediaQuery.tablet} {
    max-width: 692px;
  }
`;

export const TitleWrapper = styled.header`
  margin-bottom: 2rem;
`;
