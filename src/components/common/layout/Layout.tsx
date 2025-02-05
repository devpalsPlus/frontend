import React from 'react';
import * as S from './Layout.styled';
import Header from '../header/Header';
import useScrollRestoration from '../../../hooks/useScrollRestoration';

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  useScrollRestoration();
  return (
    <>
      <Header />
      <S.LayoutContainer>{children}</S.LayoutContainer>
    </>
  );
}

export default Layout;
