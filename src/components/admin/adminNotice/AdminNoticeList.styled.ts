import { GAP_HEIGHT } from './../../../constants/admin/adminGap';
import styled from 'styled-components';
import { SpinnerWrapperStyled } from '../../user/mypage/Spinner.styled';
import { SearchBarFixedWrapperStyled } from '../../common/admin/searchBar/SearchBar.styled';

export const SpinnerWrapper = styled(SpinnerWrapperStyled)`
  width: 100%;
`;

export const SearchBarFixedWrapper = styled(SearchBarFixedWrapperStyled)``;

export const NoticeItemContainer = styled.section`
  margin-top: calc(
    ${GAP_HEIGHT.headerTitleTop} + ${GAP_HEIGHT.sectionTop} + 1rem
  );
`;

export const NoticeItemWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
