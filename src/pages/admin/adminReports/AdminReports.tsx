import SearchBar from '../../../components/common/admin/searchBar/SearchBar';
import AdminTitle from '../../../components/common/admin/title/AdminTitle';
import Avatar from '../../../components/common/avatar/Avatar';
import useSearchBar from '../../../hooks/admin/useSearchBar';
import * as S from './AdminReports.styled';
import defaultImg from '../../../assets/defaultImg.png';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Pagination from '../../../components/common/pagination/Pagination';

import { useModal } from '../../../hooks/useModal';
import Modal from '../../../components/common/modal/Modal';

import { useGetAllReports } from '../../../hooks/admin/useGetAllReports';
import { Spinner } from '../../../components/common/loadingSpinner/LoadingSpinner.styled';
import { useHandleUser } from '../../../hooks/admin/useHandleUser';

export default function AdminReports() {
  const { searchUnit, value, handleChangePagination, handleGetKeyword } =
    useSearchBar();
  const { isOpen, message, handleModalOpen, handleModalClose, handleConfirm } =
    useModal();

  const { allReportsData, isLoading, isFetching } =
    useGetAllReports(searchUnit);

  const {
    handleClickBanButton,
    handleClickWarningButton,
    handleClickDeleteButton,
  } = useHandleUser({
    handleModalOpen,
    handleConfirm,
  });

  if (isLoading || isFetching) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  return (
    <>
      <AdminTitle title='신고 검토' />
      <S.Container>
        <S.SearchBarWrapper>
          <SearchBar
            onGetKeyword={handleGetKeyword}
            value={value}
            canWrite={false}
          />
        </S.SearchBarWrapper>
        <S.List>
          {allReportsData?.map((data) => (
            <S.Item key={data.reportId} to={`${data.reportId}`}>
              <S.ProfileImg>
                <Avatar image={defaultImg} size='50px' />
                <S.NickName>{data.nickname}</S.NickName>
              </S.ProfileImg>
              <S.ContentArea>
                <S.Category>{data.category}</S.Category>
              </S.ContentArea>
              <S.ButtonArea>
                <S.WarningButton
                  radius='primary'
                  schema='primary'
                  size='primary'
                  //userId
                  onClick={(e) => handleClickWarningButton(e, data.userId)}
                >
                  경고
                </S.WarningButton>
                <S.BanButton
                  radius='primary'
                  schema='primary'
                  size='primary'
                  //userId
                  onClick={(e) => handleClickBanButton(e, data.userId)}
                >
                  강퇴
                </S.BanButton>

                <S.DeleteButton
                  //reportId
                  onClick={(e) => handleClickDeleteButton(e, data.reportId)}
                >
                  <XMarkIcon width='17px' height='17px' />
                </S.DeleteButton>
              </S.ButtonArea>
            </S.Item>
          ))}
        </S.List>
        <Pagination
          page={searchUnit.page}
          getLastPage={5}
          onChangePagination={handleChangePagination}
        />
      </S.Container>
      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
      >
        {message}
      </Modal>
    </>
  );
}
