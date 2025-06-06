import * as S from './AdminFAQList.styled';
import SearchBar from '../../../components/common/admin/searchBar/SearchBar';
import FAQItem from '../../user/customerService/faq/FAQItem';
import { useGetFAQ } from '../../../hooks/user/useGetFAQ';
import Spinner from '../../user/mypage/Spinner';
import useSearchBar from '../../../hooks/admin/useSearchBar';

export default function AdminFAQList() {
  const { searchUnit, value, handleGetKeyword } = useSearchBar();
  const keyword = searchUnit.keyword;
  const { faqData, isLoading } = useGetFAQ({ keyword });

  if (isLoading) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  if (!faqData) return;

  return (
    <>
      <S.SearchBarFixedWrapper>
        <SearchBar onGetKeyword={handleGetKeyword} value={value} />
      </S.SearchBarFixedWrapper>
      <S.FAQItemWrapper>
        <FAQItem faqData={faqData} $isAdmin={true} />
      </S.FAQItemWrapper>
    </>
  );
}
