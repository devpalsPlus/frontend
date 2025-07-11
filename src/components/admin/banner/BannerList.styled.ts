import styled from 'styled-components';
import Button from '../../common/Button/Button';

export const Container = styled.table<{ $header?: boolean }>`
  border-collapse: collapse;
  table-layout: fixed;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  margin-top: 10rem;
`;

export const TableBody = styled.tbody``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const BannerButton = styled(Button)``;
