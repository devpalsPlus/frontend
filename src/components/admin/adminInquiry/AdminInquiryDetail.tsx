import { Outlet, useParams } from 'react-router-dom';
import * as S from './AdminInquiryDetail.styled';
import AdminInquiryDetailContent from './AdminInquiryDetailContent';
import { useAdminInquiry } from '../../../hooks/admin/useAdminInquiry';
import Spinner from '../../user/mypage/Spinner';

export default function AdminInquiryDetail() {
  const { inquiryId } = useParams();
  const id = inquiryId || '';
  const { getInquiryDetailData } = useAdminInquiry(id);
  const { data, isLoading } = getInquiryDetailData;

  if (isLoading) {
    return (
      <S.SpinnerWrapper $isAdmin={true}>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  if (!data) return;

  return (
    <S.AdminInquiryDetailContainer>
      <AdminInquiryDetailContent inquiry={data} />
      <Outlet
        context={{ createdAt: data.createdAt, answerData: data.answer }}
      />
    </S.AdminInquiryDetailContainer>
  );
}
