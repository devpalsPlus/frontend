import { PropsWithChildren, useEffect } from 'react';
import * as S from './ScrollPreventor.styled';

interface ScrollPreventorProps extends PropsWithChildren {
  isOpen?: boolean;
}

const ScrollPreventor = ({ isOpen = true, children }: ScrollPreventorProps) => {
  useEffect(() => {
    if (isOpen) document.body.classList.add('no-scroll');
    else document.body.classList.remove('no-scroll');

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);
  return (
    <>
      <S.GlobalPreventorStyle />
      {children}
    </>
  );
};

export default ScrollPreventor;
