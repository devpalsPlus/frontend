import * as S from './ReportModal.styled';
import Avatar from '../common/avatar/Avatar';
import { useRef } from 'react';
import { postReport } from '../../api/report.api';
import { reasons } from '../../constants/reportConstants';

interface ReportModalProps {
  reportTitle: { userImg: string; userName: string } | string;
  type: 'user' | 'project' | 'comment' | 'recomment';
  targetId: number;
  onClose: () => void;
}

const ReportModal = ({
  reportTitle,
  targetId,
  type,
  onClose,
}: ReportModalProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const selectedReasons = formData.getAll('reason') as string[];

    const postData = {
      reportTargetId: targetId,
      reportFilter: type === 'comment' ? 3 : 4,
      reason: selectedReasons,
      detail: textAreaRef.current?.value ? textAreaRef.current?.value : '',
    };
    console.log(postData);
    postReport(postData);

    alert('신고 되었습니다.');
    onClose();
  };

  return (
    <S.ModalContainer onClick={onClose}>
      <S.ModalBox onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>

        <S.Header>
          {typeof reportTitle === 'string' ? (
            <S.Content>"{reportTitle}"</S.Content>
          ) : (
            <>
              <S.Avatar>
                <Avatar size='55px' image={reportTitle.userImg} />
              </S.Avatar>

              <S.UserName>{reportTitle.userName}</S.UserName>
            </>
          )}
        </S.Header>

        <S.Form onSubmit={handleSubmit}>
          <S.SectionTitle>신고 사유</S.SectionTitle>

          <S.CheckboxGrid>
            {reasons.map((reason) => (
              <S.CheckItem key={reason}>
                <input type='checkbox' name='reason' value={reason} />
                {reason}
              </S.CheckItem>
            ))}
          </S.CheckboxGrid>

          <S.SectionTitle>상세 작성(생략 가능)</S.SectionTitle>
          <S.TextArea
            placeholder='신고 내용의 상세한 설명을 작성해 주세요!'
            ref={textAreaRef}
          />

          <S.Footer>
            <S.Button variant='default' onClick={onClose}>
              취소
            </S.Button>
            <S.Button variant='primary' type='submit'>
              제출
            </S.Button>
          </S.Footer>
        </S.Form>
      </S.ModalBox>
    </S.ModalContainer>
  );
};

export default ReportModal;
