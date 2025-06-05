import SearchBar from '../../../components/common/admin/searchBar/SearchBar';
import * as S from './AdminNoticeList.styled';
import { useGetNotice } from '../../../hooks/user/useGetNotice';
import Pagination from '../../../components/common/pagination/Pagination';
import Spinner from '../../../components/user/mypage/Spinner';
import NoticeItem from '../../../pages/user/customerService/notice/noticeItem/NoticeItem';
import useSearchBar from '../../../hooks/admin/useSearchBar';

export default function AdminNoticeList() {
  const { searchUnit, value, handleGetKeyword, handleChangePagination } =
    useSearchBar();
  const { noticeData, isLoading } = useGetNotice(searchUnit);

  if (isLoading) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  if (!noticeData) return;

  const lastPage = Number(noticeData.totalPages);

  return (
    <>
      <SearchBar onGetKeyword={handleGetKeyword} isNotice={true} />
      <S.NoticeItemWrapper>
        <NoticeItem
          noticeData={noticeData.notices}
          value={value}
          $width='90%'
        />
      </S.NoticeItemWrapper>
      <Pagination
        page={searchUnit.page}
        getLastPage={lastPage}
        onChangePagination={handleChangePagination}
      />
    </>
  );
}
