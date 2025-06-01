import React from 'react';
import * as S from './NoticePreview.styled';
import { useGetNotice } from '../../../../hooks/user/useGetNotice';
import line from '../../../../assets/line.svg';

const NoticePreview = () => {
  const { noticeData } = useGetNotice({ keyword: '', page: 1 });

  return (
    <S.Container>
      {noticeData?.notices.map((notice) => (
        <S.Wrapper key={notice.id}>
          <S.Dot src={line} />
          <S.NoticeTitle>{notice.title}</S.NoticeTitle>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default NoticePreview;
