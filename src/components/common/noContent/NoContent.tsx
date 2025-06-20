import * as S from './NoContent.styled';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface NoContentProps {
  type:
    | 'projects'
    | 'applicants'
    | 'passNonPass'
    | 'notification'
    | 'comment'
    | 'inquiries';
}

export default function NoContent({ type }: NoContentProps) {
  const INPUT_CONTENT = {
    projects: '공고가',
    applicants: '지원자가',
    passNonPass: '합/불합격자 리스트가',
    notification: '알림이',
    comment: '댓글이',
    inquiries: '문의글이',
  };

  return (
    <S.Wrapper>
      <DocumentTextIcon />
      <S.NoContentText>아직 {INPUT_CONTENT[type]} 없어요!</S.NoContentText>
    </S.Wrapper>
  );
}
