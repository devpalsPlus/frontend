import React from 'react';
import * as S from './Layout.styled';
import Header from '../header/Header';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Header />
      <S.LayoutContainer>
        <Outlet />
      </S.LayoutContainer>
    </>
  );
}

export default Layout;
