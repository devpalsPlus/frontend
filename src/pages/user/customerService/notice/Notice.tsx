import { useState } from 'react';
import CustomerServiceHeader from '../../../components/customerService/CustomerServiceHeader';
import Spinner from '../../../components/mypage/Spinner';
import { useGetNotice } from '../../../hooks/useGetNotice';
import * as S from './Notice.styled';
import type { NoticeSearch } from '../../../models/customerService';
import NoResult from '../../../components/common/noResult/NoResult';
import NoticeList from '../../../components/customerService/notice/NoticeList';
import { ROUTES } from '../../../constants/routes';
import Pagination from '../../../components/common/pagination/Pagination';
import ContentBorder from '../../../components/common/contentBorder/ContentBorder';

export default function Notice() {
  const [keyword, setKeyword] = useState<NoticeSearch>({
    keyword: '',
    page: 1,
  });
  const [value, setValue] = useState<string>('');
  const { noticeData, isLoading } = useGetNotice(keyword);

  const handleGetKeyword = (keyword: string) => {
    setKeyword((prev) => ({ ...prev, keyword }));
    setValue(keyword);
  };
  const handleChangePagination = (page: number) => {
    setKeyword((prev) => ({ ...prev, page }));
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
                state={{ id: list.id }}
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
          page={keyword.page}
          getLastPage={lastPage}
          onChangePagination={handleChangePagination}
        />
      </S.Container>
    </>
  );
}
