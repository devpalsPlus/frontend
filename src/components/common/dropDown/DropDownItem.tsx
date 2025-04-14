import useDropDownItem from '../../../hooks/useDropDownItem';
import * as S from './DropDownItem.styled';

interface DropdownProps {
  isEditMode?: boolean;
  commandId?: number;
  onReport?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
}

const DropDownItem = ({
  onReport,
  onEdit,
  onDelete,
  isEditMode,
}: DropdownProps) => {
  return (
    <S.Container>
      <S.Item onClick={onReport}>신고하기</S.Item>
      <S.Item onClick={onEdit}>
        {isEditMode ? '수정 취소하기' : '수정하기'}
      </S.Item>
      <S.Item onClick={onDelete}>삭제하기</S.Item>
    </S.Container>
  );
};

export default DropDownItem;
