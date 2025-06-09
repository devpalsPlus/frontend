import { Outlet, useLocation, useParams } from 'react-router-dom';
import * as S from './AdminInquiryDetail.styled';
import AdminInquiryDetailContent from './AdminInquiryDetailContent';
import { useAdminInquiry } from '../../../hooks/admin/useAdminInquiry';
import Spinner from '../../user/mypage/Spinner';
import Modal from '../../common/modal/Modal';
import { useModal } from '../../../hooks/useModal';

export default function AdminInquiryDetail() {
  const location = useLocation();
  const pathname = location.pathname;
  const isWrite = pathname.includes('write');
  const { isOpen, message, handleModalOpen, handleConfirm, handleModalClose } =
    useModal();
  const { inquiryId } = useParams();
  const id = inquiryId || '';
  const {
    getInquiryDetailData,
    postInquiryAnswerMutate,
    patchInquiryAnswerMutate,
  } = useAdminInquiry({
    handleModalOpen,
    id,
    handleConfirm,
  });
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
        context={{
          createdAt: data.updatedAt,
          answerData: data.answer,
          isWrite,
          id,
          postInquiryAnswerMutate,
          patchInquiryAnswerMutate,
        }}
      />
      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
      >
        {message}
      </Modal>
    </S.AdminInquiryDetailContainer>
  );
}
