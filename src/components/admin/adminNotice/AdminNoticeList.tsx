import { useEffect, useState } from 'react';
import SearchBar from '../../../components/common/admin/searchBar/SearchBar';
import * as S from './AdminNoticeList.styled';
import type { NoticeSearch } from '../../../models/customerService';
import { useGetNotice } from '../../../hooks/user/useGetNotice';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../../../components/common/pagination/Pagination';
import Spinner from '../../../components/user/mypage/Spinner';
import NoticeItem from '../../user/customerService/notice/noticeItem/NoticeItem';

export default function AdminNoticeList() {
  const [noticeSearch, setNoticeSearch] = useState<NoticeSearch>({
    keyword: '',
    page: 1,
  });
  const [value, setValue] = useState<string>('');
  const { noticeData, isLoading } = useGetNotice(noticeSearch);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const searchKeyword = searchParams.get('keyword');

    if (searchKeyword) {
      setNoticeSearch((prev) => ({ ...prev, keyword: searchKeyword }));
      setValue((prev) => (searchKeyword ? searchKeyword : prev));
    }
  }, [searchParams]);

  const handleGetKeyword = (keyword: string) => {
    setNoticeSearch((prev) => ({ ...prev, keyword }));
    setValue(keyword);
  };
  const handleChangePagination = (page: number) => {
    setNoticeSearch((prev) => ({ ...prev, page }));
  };

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
      <SearchBar onGetKeyword={handleGetKeyword} value={value} />
      <S.NoticeItemWrapper>
        <NoticeItem
          noticeData={noticeData.notices}
          value={value}
          $width='90%'
        />
      </S.NoticeItemWrapper>
      <Pagination
        page={noticeSearch.page}
        getLastPage={lastPage}
        onChangePagination={handleChangePagination}
      />
    </>
  );
}
