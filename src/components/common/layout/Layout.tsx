import React from 'react';
import * as S from './Layout.styled';
import Header from '../header/Header';
import { ScrollRestoration } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <S.LayoutContainer>{children}</S.LayoutContainer>
    </>
  );
}

export default Layout;
