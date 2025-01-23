import * as S from './NoContent.styled';
import { DocumentTextIcon } from '@heroicons/react/24/outline';

interface NoContentProps {
  type: 'projects' | 'applicants';
}

export default function NoContent({ type }: NoContentProps) {
  const INPUT_CONTENT = {
    projects: '공고가',
    applicants: '지원자가',
  };

  return (
    <S.Wrapper>
      <DocumentTextIcon />
      <S.NoContentText>아직 {INPUT_CONTENT[type]} 없어요!</S.NoContentText>
    </S.Wrapper>
  );
}
