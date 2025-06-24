import type { SearchParamsType } from './AdminInquiryList';
import * as S from './AdminInquiryListLookup.styled';

interface AdminInquiryListLookupProps {
  onSearchParamsChange: (params: SearchParamsType) => void;
}

export default function AdminInquiryListLookup({
  onSearchParamsChange,
}: AdminInquiryListLookupProps) {
  return (
    <S.LookupContainer>
      <h2>문의 목록 조회</h2>
    </S.LookupContainer>
  );
}
