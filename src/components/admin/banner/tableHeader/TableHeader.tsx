import * as S from './TableHeader.styled';

const TableHeader = () => (
  <S.TableHeader>
    <S.TableRow $header={true}>
      <S.TableHeaderCell>No</S.TableHeaderCell>
      <S.TableHeaderCell>이미지</S.TableHeaderCell>
      <S.TableHeaderCell>노출 상태</S.TableHeaderCell>
      <S.TableHeaderCell>노출 여부</S.TableHeaderCell>
      <S.TableHeaderCell>노출 기간</S.TableHeaderCell>
      <S.TableHeaderCell>관리</S.TableHeaderCell>
    </S.TableRow>
  </S.TableHeader>
);

export default TableHeader;
