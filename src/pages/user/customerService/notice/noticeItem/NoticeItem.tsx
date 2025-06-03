import * as S from './NoticeItem.styled';
import ContentBorder from '../../../../../components/common/contentBorder/ContentBorder';
import { ADMIN_ROUTE, ROUTES } from '../../../../../constants/routes';
import NoticeList from '../../../../../components/user/customerService/notice/NoticeList';
import NoResult from '../../../../../components/common/noResult/NoResult';
import type { NoticeList as TNoticeList } from '../../../../../models/customerService';
import { useLocation } from 'react-router-dom';

interface NoticeItemProps {
  noticeData: TNoticeList[];
  value: string;
  $width: string;
}

export default function NoticeItem({
  noticeData,
  value,
  $width = '75%',
}: NoticeItemProps) {
  const location = useLocation();
  const includesAdmin = location.pathname.includes('admin');

  return (
    <S.Wrapper $width={$width}>
      {noticeData.length > 0 && <ContentBorder />}
      {noticeData.length > 0 ? (
        noticeData.map((list) => (
          <S.NoticeDetailLink
            to={
              includesAdmin
                ? `${ADMIN_ROUTE.admin}/${ADMIN_ROUTE.notice}/${ADMIN_ROUTE.detail}/${list.id}`
                : `${ROUTES.customerService}/${ROUTES.noticeDetail}/${list.id}`
            }
            state={{ id: list.id, keyword: value, includesAdmin }}
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
  );
}
