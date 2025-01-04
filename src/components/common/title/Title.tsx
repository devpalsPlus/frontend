import * as S from './Title.styled';
import { HeadingSize } from '../../../style/theme';

export interface TitleProps {
  children: React.ReactNode;
  size: HeadingSize;
}

const Title = ({ children, size }:TitleProps) => {
  return (
    <S.Container size={size}>{children}</S.Container>
  )
}

export default Title;