import * as S from './MyProfileWrapper.styled';

interface MyProfileWrapperProps {
  children: React.ReactNode;
}

export default function MyProfileWrapper({ children }: MyProfileWrapperProps) {
  return <S.Container>{children}</S.Container>;
}
