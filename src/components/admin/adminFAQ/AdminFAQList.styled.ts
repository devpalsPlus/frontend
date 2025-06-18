import styled from 'styled-components';
import { SpinnerWrapperStyled } from '../../user/mypage/Spinner.styled';
import { SearchBarFixedWrapperStyled } from '../../common/admin/searchBar/SearchBar.styled';
import { GAP_HEIGHT } from '../../../constants/admin/adminGap';

export const SpinnerWrapper = styled(SpinnerWrapperStyled)``;

export const SearchBarFixedWrapper = styled(SearchBarFixedWrapperStyled)``;

export const FAQItemWrapper = styled.div`
  margin-top: calc(${GAP_HEIGHT.headerTitleTop} + ${GAP_HEIGHT.sectionTop});
`;
