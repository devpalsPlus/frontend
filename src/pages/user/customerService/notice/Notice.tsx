import { useEffect, useState } from 'react';
import * as S from './Notice.styled';
import type { NoticeSearch } from '../../../../models/customerService';
import { useGetNotice } from '../../../../hooks/user/useGetNotice';
import { Spinner } from '../../../../components/common/loadingSpinner/LoadingSpinner.styled';
import CustomerServiceHeader from '../../../../components/user/customerService/CustomerServiceHeader';
import Pagination from '../../../../components/common/pagination/Pagination';
import { useSearchParams } from 'react-router-dom';
import NoticeItem from '../../../../components/user/customerService/notice/noticeItem/NoticeItem';

export default function Notice() {
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
      <CustomerServiceHeader
        title='공지사항'
        keyword={value}
        onGetKeyword={handleGetKeyword}
      />
      <S.Container>
        <NoticeItem
          noticeData={noticeData.notices}
          value={value}
          $width='75%'
        />
        <Pagination
          page={noticeSearch.page}
          getLastPage={lastPage}
          onChangePagination={handleChangePagination}
        />
      </S.Container>
    </>
  );
}
