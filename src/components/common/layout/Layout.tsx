import React from 'react';
import * as S from './Layout.styled';
import Header from '../header/Header';

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <S.LayoutContainer>{children}</S.LayoutContainer>
    </>
  );
}

export default Layout;
