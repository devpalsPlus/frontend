import React from 'react';
import * as S from './AllUserPreview.styled';
import Avatar from '../../../common/avatar/Avatar';
import { ADMIN_ROUTE } from '../../../../constants/routes';
import arrow_right from '../../../../assets/ArrowRight.svg';
import { useGetAllUsersPreview } from '../../../../hooks/admin/useGetAllUsersPreview';
import { Spinner } from '../../../common/loadingSpinner/LoadingSpinner.styled';

const AllUserPreview = () => {
  const { allUserData, isLoading, isFetching } = useGetAllUsersPreview();

  if (isLoading || isFetching) {
    return (
      <S.SpinnerContainer>
        <Spinner />
      </S.SpinnerContainer>
    );
  }

  if (!allUserData || allUserData.length === 0) {
    return <S.Container>가입된 회원이 없습니다.</S.Container>;
  }

  return (
    <S.Container>
      {allUserData?.map((user) => (
        <S.Wrapper key={user.id}>
          <S.UserArea>
            <Avatar image={user.profileImg} size='40px' />
            <S.ContentArea
              to={`${ADMIN_ROUTE.admin}/${ADMIN_ROUTE.users}/${user.id}`}
            >
              <S.NickName>{user.nickname}</S.NickName>
              <S.Email>{user.email}</S.Email>
            </S.ContentArea>
          </S.UserArea>
          <S.MoveToUsersArea
            to={`${ADMIN_ROUTE.admin}/${ADMIN_ROUTE.users}/${user.id}`}
          >
            <S.Text>상세 보기</S.Text>
            <S.Arrow src={arrow_right} />
          </S.MoveToUsersArea>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default AllUserPreview;
