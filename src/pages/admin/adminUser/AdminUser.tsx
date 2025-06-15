import * as S from './AdminUser.styled';
import AdminTitle from '../../../components/common/admin/title/AdminTitle';
import { useGetAllUsers } from '../../../hooks/admin/useGetAllUsers';
import UserCard from '../../../components/admin/userCard/UserCard';
import ScrollPreventor from '../../../components/common/modal/ScrollPreventor';
import SearchBar from '../../../components/common/admin/searchBar/SearchBar';
import Pagination from '../../../components/common/pagination/Pagination';
import useSearchBar from '../../../hooks/admin/useSearchBar';
import { ADMIN_MODAL_MESSAGE } from '../../../constants/admin/adminModal';
import { Link } from 'react-router-dom';
import { ADMIN_ROUTE } from '../../../constants/routes';
import Spinner from '../../../components/user/mypage/Spinner';

const AdminUser = () => {
  const { searchUnit, value, handleGetKeyword, handleChangePagination } =
    useSearchBar();
  const { allUserData, isLoading, isFetching } = useGetAllUsers(searchUnit);

  if (isLoading || isFetching) {
    return (
      <S.Spinner>
        <Spinner />
      </S.Spinner>
    );
  }

  if (!allUserData || allUserData.users.length === 0) {
    return <S.Container>{ADMIN_MODAL_MESSAGE.NO_RESULT}</S.Container>;
  }

  const onBan = (userId: number) => {};

  return (
    <>
      <ScrollPreventor>
        <S.Container>
          <AdminTitle title='회원 조회' />
          <S.SearchBar>
            <SearchBar
              onGetKeyword={handleGetKeyword}
              canWrite={false}
              value={value}
            />
          </S.SearchBar>

          <S.ScrollArea>
            <S.UserContainer>
              {allUserData.users.map((userData) => (
                <Link
                  key={userData.id}
                  to={`${userData.id}/${ADMIN_ROUTE.basic}`}
                >
                  <UserCard
                    key={userData.id}
                    userData={userData}
                    onBan={onBan}
                  />
                </Link>
              ))}
            </S.UserContainer>

            <Pagination
              page={searchUnit.page}
              getLastPage={allUserData.totalPage}
              onChangePagination={handleChangePagination}
            />
          </S.ScrollArea>
        </S.Container>
      </ScrollPreventor>
    </>
  );
};

export default AdminUser;
