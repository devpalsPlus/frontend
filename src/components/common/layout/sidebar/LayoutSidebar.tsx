import React from 'react';
import * as S from './LayoutSidebar.styled';
interface LayoutSidebarProps {
  children: React.ReactNode;
}
const LayoutSidebar = ({ children }: LayoutSidebarProps) => {
  /*
    관리자 페이지와 마이 페이지의 Sidebar Layout 입니다.
  */

  return (
    <S.Container>
      {/* <Sidebar /> */}
      {children}
    </S.Container>
  );
};

export default LayoutSidebar;
