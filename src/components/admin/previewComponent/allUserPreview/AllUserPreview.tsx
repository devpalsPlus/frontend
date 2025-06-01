import React from 'react';
import * as S from './AllUserPreview.styled';
import { useGetAllUsers } from '../../../../hooks/admin/useGetAllUsers';
import Avatar from '../../../common/avatar/Avatar';
import { ADMIN_ROUTE } from '../../../../constants/routes';
import arrow_right from '../../../../assets/ArrowRight.svg';

const AllUserPreview = () => {
  const { allUserData, isLoading } = useGetAllUsers();

  const previewList = allUserData
    ? allUserData.length > 6
      ? allUserData.slice(0, 4)
      : allUserData
    : [];

  return (
    <S.Container>
      {previewList?.map((user) => (
        <S.Wrapper key={user.id}>
          <S.UserArea>
            <Avatar image={undefined} size='40px' />
            <S.ContentArea to={`${ADMIN_ROUTE.allUser}/${user.id}`}>
              <S.NickName>{user.user.nickname}</S.NickName>
              <S.Email>{user.email}</S.Email>
            </S.ContentArea>
          </S.UserArea>
          <S.MoveToUsersArea to={`${ADMIN_ROUTE.allUser}/${user.id}`}>
            <S.Text>상세 보기</S.Text>
            <S.Arrow src={arrow_right} />
          </S.MoveToUsersArea>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default AllUserPreview;
