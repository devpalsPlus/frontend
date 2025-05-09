import { useState } from 'react';
import CustomerServiceHeader from '../../../components/customerService/CustomerServiceHeader';
import Spinner from '../../../components/mypage/Spinner';
import { useGetNotice } from '../../../hooks/useGetNotice';
import * as S from './Notice.styled';
import type { SearchKeyword } from '../../../models/customerService';
import NoResult from '../../../components/common/noResult/NoResult';
import NoticeList from '../../../components/customerService/notice/NoticeList';
import { ROUTES } from '../../../constants/routes';

export default function Notice() {
  const [keyword, setKeyword] = useState<SearchKeyword>({ keyword: '' });
  const [value, setValue] = useState<string>('');
  const { noticeData, isLoading } = useGetNotice(keyword);

  const handleGetKeyword = (keyword: string) => {
    setKeyword({ keyword });
    setValue(keyword);
  };

  if (isLoading) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  if (!noticeData) return;

  return (
    <>
      <CustomerServiceHeader
        title='공지사항'
        keyword={value}
        onGetKeyword={handleGetKeyword}
      />
      <S.Container>
        <S.Wrapper>
          <S.ContentBorder></S.ContentBorder>
          {noticeData.length > 0 ? (
            noticeData.map((list) => (
              <S.NoticeDetailLink
                to={`${ROUTES.customerService}/${ROUTES.noticeDetail}/${list.id}`}
                state={{ id: list.id }}
                key={list.id}
              >
                <NoticeList list={list} />
                <S.ContentBorder></S.ContentBorder>
              </S.NoticeDetailLink>
            ))
          ) : (
            <NoResult height='20rem' />
          )}
        </S.Wrapper>
      </S.Container>
    </>
  );
}
