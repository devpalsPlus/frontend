import useDeleteComment from '../../../hooks/CommentHooks/useDeleteComment';
import useDeleteReply from '../../../hooks/CommentHooks/useDeleteReply';
import { useModal } from '../../../hooks/useModal';
import ReportModal from '../../reportComponent/ReportModal';
import * as S from './DropDownItem.styled';

interface DropdownProps {
  projectId: number;
  activateEditMode?: number | null;
  commentId: number;
  recommentId?: number;
  loginUserId?: number;
  commentUserId: number;
  reportTitle: { userImg: string; userName: string } | string;
  reply?: boolean;
  onEdit?: () => void;
}

const DropDownItem = ({
  projectId,
  onEdit,
  activateEditMode,
  commentId,
  recommentId,
  commentUserId,
  loginUserId,
  reply,
  reportTitle,
}: DropdownProps) => {
  const { removeComment } = useDeleteComment(projectId);
  const { removeReply } = useDeleteReply(commentId, projectId);
  const { isOpen, handleOpenReportModal, handleCloseReportModal } = useModal();

  const onDelete = (commentId: number, recommentId?: number) => {
    if (reply && recommentId) {
      if (confirm('답글을 완성히 삭제할까요?')) removeReply(recommentId);
    } else {
      if (confirm('댓글을 완성히 삭제할까요?')) removeComment(commentId);
    }
  };

  return (
    <>
      <S.Container>
        <S.Item onClick={handleOpenReportModal}>신고하기</S.Item>

        {loginUserId === commentUserId && (
          <>
            <S.Item onClick={onEdit}>
              {activateEditMode === commentId ? '수정 취소하기' : '수정하기'}
            </S.Item>
            <S.Item onClick={() => onDelete(commentId, recommentId)}>
              삭제하기
            </S.Item>{' '}
          </>
        )}
      </S.Container>
      {isOpen && (
        <ReportModal
          reportTitle={reportTitle}
          targetId={recommentId ? recommentId : commentId}
          type={recommentId ? 'recomment' : 'comment'}
          onClose={handleCloseReportModal}
        />
      )}
    </>
  );
};

export default DropDownItem;
