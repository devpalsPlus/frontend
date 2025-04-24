import useDeleteCommand from '../../../hooks/CommandHooks/useDeleteCommand';
import useDeleteReply from '../../../hooks/CommandHooks/useDeleteReply';
import * as S from './DropDownItem.styled';

interface DropdownProps {
  projectId: number;
  activateEditMode?: number | null;
  commandId: number;
  recommentId?: number;
  loginUserId?: number;
  commandUserId: number;
  reply?: boolean;
  onEdit?: () => void;
}

const DropDownItem = ({
  projectId,
  onEdit,
  activateEditMode,
  commandId,
  recommentId,
  commandUserId,
  loginUserId,
  reply,
}: DropdownProps) => {
  const { removeCommand } = useDeleteCommand(projectId);
  const { removeReply } = useDeleteReply(commandId, projectId);

  const onReport = () => {};

  const onDelete = (commandId: number, recommentId?: number) => {
    if (reply && recommentId) {
      if (confirm('댓글을 완성히 삭제할까요?')) removeReply(recommentId);
    } else {
      if (confirm('댓글을 완성히 삭제할까요?')) removeCommand(commandId);
    }
  };

  return (
    <S.Container>
      <S.Item onClick={onReport}>신고하기</S.Item>

      {loginUserId === commandUserId && (
        <>
          <S.Item onClick={onEdit}>
            {activateEditMode === commandId ? '수정 취소하기' : '수정하기'}
          </S.Item>
          <S.Item onClick={() => onDelete(commandId, recommentId)}>
            삭제하기
          </S.Item>{' '}
        </>
      )}
    </S.Container>
  );
};

export default DropDownItem;
