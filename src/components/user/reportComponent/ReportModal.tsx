import * as S from './ReportModal.styled';
import Avatar from '../common/avatar/Avatar';
import { useRef, useState } from 'react';
import { postReport } from '../../api/report.api';
import { reasons } from '../../constants/reportConstants';
import Button from '../common/Button/Button';
import ScrollPreventor from '../common/modal/ScrollPreventor';

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
  const [isNotExist, setIsNotExist] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const selectedReasons = formData.getAll('reason') as string[];

    if (selectedReasons.length === 0) {
      setIsNotExist(true);
      return;
    } else {
      setIsNotExist(false);
    }

    const postData = {
      reportTargetId: targetId,
      reportFilter:
        type === 'user'
          ? 1
          : type === 'project'
          ? 2
          : type === 'comment'
          ? 3
          : 4,
      reason: selectedReasons,
      detail: textAreaRef.current?.value ? textAreaRef.current?.value : '',
    };

    try {
      postReport(postData);
      alert('신고 되었습니다.');
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ScrollPreventor>
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
                  <S.CheckInput type='checkbox' name='reason' value={reason} />
                  <S.CheckContent htmlFor={`reason-${reason}`}>
                    {reason}
                  </S.CheckContent>
                </S.CheckItem>
              ))}

              {isNotExist && (
                <S.ErrorMessage>
                  신고 사유를 하나 이상 선택해주세요.
                </S.ErrorMessage>
              )}
            </S.CheckboxGrid>

            <S.SectionTitle>상세 작성(생략 가능)</S.SectionTitle>
            <S.TextArea
              placeholder='신고 내용의 상세한 설명을 작성해 주세요!'
              ref={textAreaRef}
            />

            <S.Footer>
              <Button
                radius='large'
                schema='grey'
                size='primary'
                onClick={onClose}
              >
                취소
              </Button>
              <Button
                radius='large'
                schema='primary'
                size='primary'
                type='submit'
              >
                제출
              </Button>
            </S.Footer>
          </S.Form>
        </S.ModalBox>
      </S.ModalContainer>
    </ScrollPreventor>
  );
};

export default ReportModal;
