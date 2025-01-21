import * as S from './LabelWithContent.styled';
interface LabelWithContentProps {
  label: string;
  content: string;
}

export const LabelWithContent = ({ label, content }: LabelWithContentProps) => (
  <>
    <S.Label>{label}</S.Label>
    <S.Content>{content}</S.Content>
  </>
);
