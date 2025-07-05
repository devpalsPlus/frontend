import * as S from './BannerList.styled';
import ScrollPreventor from '../../common/modal/ScrollPreventor';
import { useBannerManagement } from '../../../hooks/admin/useBannerManagement';
import { useModal } from '../../../hooks/useModal';
import TableHeader from './tableHeader/TableHeader';
import BannerRow from './bannerRow/BannerRow';
import NewBannerRow from './newBannerRow/NewBannerRow';
import Modal from '../../common/modal/Modal';

export default function BannerList() {
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();

  const {
    allBanners,
    isLoading,
    newBanner,
    isCreating,
    canCreateBanner,
    hasNewBannerChanges,
    handleToggle,
    handleChangeType,
    handleDateChange,
    handleImageChange,
    handleDelete,
    handleCreate,
    handleInputChange,
    toggleCreating,
    resetNewBanner,
  } = useBannerManagement({ handleModalOpen });

  const handleCancel = () => {
    if (hasNewBannerChanges) {
      const confirmed = window.confirm(
        '입력 데이터가 날아 갈 수 있습니다. 계속 하시겠습니까?'
      );
      if (confirmed) {
        resetNewBanner();
        toggleCreating();
      }
    } else {
      toggleCreating();
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ScrollPreventor />
      <S.Container>
        <colgroup>
          <col style={{ width: '50px' }} />
          <col style={{ width: '280px' }} />
          <col style={{ width: '100px' }} />
          <col style={{ width: '160px' }} />
          <col style={{ width: '240px' }} />
          <col style={{ width: '140px' }} />
        </colgroup>
        <TableHeader />
        <S.TableBody>
          {allBanners.map((banner, index) => (
            <BannerRow
              key={banner.id}
              banner={banner}
              index={index}
              onToggle={handleToggle}
              onChangeType={handleChangeType}
              onDateChange={handleDateChange}
              onImageChange={handleImageChange}
              onDelete={handleDelete}
            />
          ))}
          {isCreating && (
            <NewBannerRow
              newBanner={newBanner}
              canCreateBanner={canCreateBanner}
              onInputChange={handleInputChange}
              onCreate={handleCreate}
            />
          )}
        </S.TableBody>
      </S.Container>
      <S.ButtonContainer>
        {!isCreating ? (
          <S.CreateButton
            radius='primary'
            schema='primary'
            size='primary'
            onClick={toggleCreating}
          >
            배너 생성하기
          </S.CreateButton>
        ) : (
          <S.CancelButton
            radius='primary'
            schema='primary'
            size='primary'
            onClick={handleCancel}
          >
            취소하기
          </S.CancelButton>
        )}
      </S.ButtonContainer>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </>
  );
}
