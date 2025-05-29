import { useEffect, useState } from 'react';
import * as S from './Notice.styled';
import type { NoticeSearch } from '../../../../models/customerService';
import { useGetNotice } from '../../../../hooks/user/useGetNotice';
import { Spinner } from '../../../../components/common/loadingSpinner/LoadingSpinner.styled';
import CustomerServiceHeader from '../../../../components/user/customerService/CustomerServiceHeader';
import ContentBorder from '../../../../components/common/contentBorder/ContentBorder';
import { ROUTES } from '../../../../constants/routes';
import NoticeList from '../../../../components/user/customerService/notice/NoticeList';
import NoResult from '../../../../components/common/noResult/NoResult';
import Pagination from '../../../../components/common/pagination/Pagination';
import { useLocation } from 'react-router-dom';

export default function Notice() {
  const [noticeSearch, setNoticeSearch] = useState<NoticeSearch>({
    keyword: '',
    page: 1,
  });
  const [value, setValue] = useState<string>('');
  const { noticeData, isLoading } = useGetNotice(noticeSearch);
  const location = useLocation();
  const hasKeyword = location.search
    ? decodeURI(location.search.split('=')[1])
    : '';

  useEffect(() => {
    if (hasKeyword) {
      setNoticeSearch((prev) => ({ ...prev, keyword: hasKeyword }));
      setValue(hasKeyword);
    }
  }, [hasKeyword]);

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
        <S.Wrapper>
          {noticeData.notices.length > 0 && <ContentBorder />}
          {noticeData.notices.length > 0 ? (
            noticeData.notices.map((list) => (
              <S.NoticeDetailLink
                to={`${ROUTES.customerService}/${ROUTES.noticeDetail}/${list.id}`}
                state={{ id: list.id, keyword: value }}
                key={list.id}
              >
                <NoticeList notice={list} />
                <ContentBorder />
              </S.NoticeDetailLink>
            ))
          ) : (
            <NoResult height='20rem' />
          )}
        </S.Wrapper>
        <Pagination
          page={noticeSearch.page}
          getLastPage={lastPage}
          onChangePagination={handleChangePagination}
        />
      </S.Container>
    </>
  );
}
