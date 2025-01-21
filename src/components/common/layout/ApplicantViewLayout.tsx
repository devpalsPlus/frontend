import { PropsWithChildren } from 'react';
import * as S from './ApplicantViewLayout.styled';
import Header from '../header/Header';

function ApplicantViewLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <S.ApplicantLayout>{children}</S.ApplicantLayout>
    </>
  );
}

export default ApplicantViewLayout;
