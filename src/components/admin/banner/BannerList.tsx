import { useState, useCallback } from 'react';
import * as S from './BannerList.styled';
import ScrollPreventor from '../../common/modal/ScrollPreventor';
import { useGetAllBannerList } from '../../../hooks/admin/useGetAllBannerList';
import { useBannerMutations } from '../../../hooks/admin/useBannerMutations';
import { useModal } from '../../../hooks/useModal';
import TableHeader from './tableHeader/TableHeader';
import BannerRow from './bannerRow/BannerRow';
import NewBannerRow from './newBannerRow/NewBannerRow';
import Modal from '../../common/modal/Modal';
import { Spinner } from '../../common/loadingSpinner/LoadingSpinner.styled';

const TABLE_COLUMNS = [
  { width: '50px' },
  { width: '280px' },
  { width: '100px' },
  { width: '160px' },
  { width: '240px' },
  { width: '140px' },
];

export default function BannerList() {
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const { allBannersData, isLoading } = useGetAllBannerList();
  const { deleteBannerMutate } = useBannerMutations({ handleModalOpen });
  const [isCreating, setIsCreating] = useState(false);

  const handleDelete = useCallback(
    async (id: number) => {
      if (window.confirm('정말 삭제하시겠습니까?')) {
        try {
          await deleteBannerMutate.mutateAsync(id);
        } catch (error) {
          console.error('삭제 실패:', error);
        }
      }
    },
    [deleteBannerMutate]
  );

  const toggleCreating = useCallback(() => {
    setIsCreating((prev) => !prev);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <ScrollPreventor />
      <S.Container>
        <colgroup>
          {TABLE_COLUMNS.map((col, index) => (
            <col key={index} style={{ width: col.width }} />
          ))}
        </colgroup>

        <TableHeader />

        <S.TableBody>
          {allBannersData?.data.map((banner, index) => (
            <BannerRow
              key={banner.id}
              banner={banner}
              index={index}
              onDelete={handleDelete}
            />
          ))}

          {isCreating && <NewBannerRow />}
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
            onClick={toggleCreating}
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
