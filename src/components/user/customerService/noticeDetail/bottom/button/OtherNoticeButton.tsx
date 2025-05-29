import { ROUTES } from '../../../../../../constants/routes';
import type { OtherNotice } from '../../../../../../models/customerService';
import { formatDate } from '../../../../../../util/format';
import * as S from './OtherNoticeButton.styled';

interface OtherNoticeButtonProps extends OtherNotice {
  navigation: string;
}

export default function OtherNoticeButton({
  navigation,
  id,
  title,
  createdAt,
}: OtherNoticeButtonProps) {
  return (
    <S.OtherNoticeLink
      to={`${ROUTES.customerService}/${ROUTES.noticeDetail}/${id}`}
      state={{ id }}
    >
      <S.OtherNoticeWrapper>
        <S.OtherNotice>{navigation}</S.OtherNotice>
        <S.OtherNoticeTitle>{title}</S.OtherNoticeTitle>
      </S.OtherNoticeWrapper>
      <S.OtherNoticeDate>{formatDate(createdAt)}</S.OtherNoticeDate>
    </S.OtherNoticeLink>
  );
}
