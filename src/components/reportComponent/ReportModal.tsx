import * as S from './ReportModal.styled';
import Avatar from '../common/avatar/Avatar';
import { useRef } from 'react';

interface ReportModalProps {
  avatarUrl: string;
  userName: string;
  onClose: () => void;
}

const reasons = [
  '욕설/비속어',
  '성적내용/음란물',
  '광고/스팸',
  '사기/부정행위',
  '도배/스팸',
  '혐오/차별발언',
  '사생활 침해',
  '저작권 침해',
  '기타',
];

const ReportModal = ({ avatarUrl, userName, onClose }: ReportModalProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const selectedReasons = formData.getAll('reason') as string[];

    console.log(selectedReasons);
    console.log(textAreaRef.current?.value);

    onClose();
  };

  return (
    <S.Overlay onClick={onClose}>
      <S.ModalBox onClick={(e) => e.stopPropagation()}>
        <S.CloseButton onClick={onClose}>×</S.CloseButton>

        <S.Header>
          <S.Avatar>
            <Avatar size='55px' image={avatarUrl} />
          </S.Avatar>
          <S.UserName>{userName}</S.UserName>
        </S.Header>

        <S.Form onSubmit={handleSubmit}>
          <S.SectionTitle>
            해당 유저를 신고하려는 이유를 선택해주세요.
          </S.SectionTitle>

          <S.CheckboxGrid>
            {reasons.map((reason) => (
              <S.CheckItem key={reason}>
                <input type='checkbox' name='reason' value={reason} />
                {reason}
              </S.CheckItem>
            ))}
          </S.CheckboxGrid>

          <S.DescriptionLabel>상세 작성(생략 가능)</S.DescriptionLabel>
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
    </S.Overlay>
  );
};

export default ReportModal;
