import * as S from './AdminAllUser.styled';
import AdminTitle from '../../../components/common/admin/title/AdminTitle';
import { useGetAllUsers } from '../../../hooks/admin/useGetAllUsers';
import LoadingSpinner from '../../../components/common/loadingSpinner/LoadingSpinner';
import UserCard from '../../../components/admin/userCard/UserCard';
import ScrollPreventor from '../../../components/common/modal/ScrollPreventor';
import SearchBar from '../../../components/common/admin/searchBar/SearchBar';
import Pagination from '../../../components/common/pagination/Pagination';
import useSearchBar from '../../../hooks/admin/useSearchBar';
import { ADMIN_MODAL_MESSAGE } from '../../../constants/admin/adminModal';

const AdminAllUser = () => {
  const { searchUnit, handleGetKeyword, handleChangePagination } =
    useSearchBar();
  const { allUserData, isLoading, isFetching } = useGetAllUsers(searchUnit);

  if (isLoading || isFetching) {
    return <LoadingSpinner />;
  }

  if (!allUserData || allUserData.allUsers.length === 0) {
    return <S.Container>{ADMIN_MODAL_MESSAGE.NO_RESULT}</S.Container>;
  }

  return (
    <ScrollPreventor>
      <S.Container>
        <AdminTitle title='회원 전체 조회' />

        <S.SearchBar>
          <SearchBar onGetKeyword={handleGetKeyword} isNotice={false} />
        </S.SearchBar>

        <S.ScrollArea>
          <S.UserContainer>
            {allUserData.allUsers?.map((userData) => (
              <UserCard key={userData.id} userData={userData} />
            ))}
          </S.UserContainer>
          <Pagination
            page={searchUnit.page}
            getLastPage={allUserData.totalPages}
            onChangePagination={handleChangePagination}
          />
        </S.ScrollArea>
      </S.Container>
    </ScrollPreventor>
  );
};

export default AdminAllUser;
