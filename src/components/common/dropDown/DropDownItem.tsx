import useDeleteCommand from '../../../hooks/CommandHooks/useDeleteCommand';
import * as S from './DropDownItem.styled';

interface DropdownProps {
  projectId: number;
  activateEditMode?: number | null;
  commandId: number;
  onEdit?: () => void;
}

const DropDownItem = ({
  projectId,
  onEdit,
  activateEditMode,
  commandId,
}: DropdownProps) => {
  const { removeCommand } = useDeleteCommand(projectId);

  const onReport = () => {};

  const onDelete = (commandId: number) => {
    if (confirm('댓글을 완성히 삭제할까요?')) {
      removeCommand(commandId);
    }
  };

  return (
    <S.Container>
      <S.Item onClick={onReport}>신고하기</S.Item>
      <S.Item onClick={onEdit}>
        {activateEditMode === commandId ? '수정 취소하기' : '수정하기'}
      </S.Item>
      <S.Item onClick={() => onDelete(commandId)}>삭제하기</S.Item>
    </S.Container>
  );
};

export default DropDownItem;
