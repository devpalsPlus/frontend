import { EllipsisVerticalIcon, EyeIcon } from '@heroicons/react/24/outline';
import { formatDate } from '../../../../../util/format';
import * as S from './NoticeDetailContent.styled';
import logo from '../../../../../assets/mainlogo.svg';
import ContentBorder from '../../../../common/contentBorder/ContentBorder';
import useAuthStore from '../../../../../store/authStore';
import DropDown from '../../../../common/dropDown/DropDown';
import { ADMIN_ROUTE } from '../../../../../constants/routes';
import { useLocation, useParams } from 'react-router-dom';
import { useAdminNotice } from '../../../../../hooks/admin/useAdminNotice';
import Modal from '../../../../common/modal/Modal';
import { useModal } from '../../../../../hooks/useModal';

interface NoticeDetailContentProps {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  viewCount: number;
}

export default function NoticeDetailContent({
  id,
  title,
  content,
  createdAt,
  viewCount,
}: NoticeDetailContentProps) {
  const isAdmin = useAuthStore((state) => state.userData?.admin) ?? false;
  const { noticeId } = useParams() ?? '';
  const { isOpen, message, handleModalOpen, handleModalClose } = useModal();
  const location = useLocation();
  const pathname = `${ADMIN_ROUTE.admin}/${ADMIN_ROUTE.notice}`;
  const { deleteNoticeMutate } = useAdminNotice({ handleModalOpen, pathname });

  const handleClickDeleteNotice = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (noticeId) {
      deleteNoticeMutate.mutate(noticeId);
    }
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>{title}</S.Title>
        <S.AdminWrapper>
          <S.AdminImg src={logo} />
          <S.Admin>DevPals</S.Admin>
        </S.AdminWrapper>
        <S.AdminAuthWrapper>
          {Boolean(id) && (
            <S.InfoWrapper>
              <S.NoticeContentDate>{formatDate(createdAt)}</S.NoticeContentDate>
              <S.ViewWrapper>
                <S.ViewIcon>
                  <EyeIcon />
                </S.ViewIcon>
                <S.ViewCount>{viewCount}</S.ViewCount>
              </S.ViewWrapper>
            </S.InfoWrapper>
          )}
          {isAdmin && (
            <S.AdminDropdownWrapper>
              <DropDown
                toggleButton={
                  <S.AdminAuthButton>
                    <EllipsisVerticalIcon />
                  </S.AdminAuthButton>
                }
              >
                <S.AdminLinkWrapper>
                  <S.AdminLink
                    to={`${ADMIN_ROUTE.admin}/${ADMIN_ROUTE.notice}/${ADMIN_ROUTE.detail}/${noticeId}/${ADMIN_ROUTE.modification}`}
                    state={{ from: location.pathname }}
                  >
                    수정하기
                  </S.AdminLink>
                  <S.AdminLink to='#' onClick={handleClickDeleteNotice}>
                    삭제하기
                  </S.AdminLink>
                </S.AdminLinkWrapper>
              </DropDown>
            </S.AdminDropdownWrapper>
          )}
        </S.AdminAuthWrapper>
      </S.TitleWrapper>
      <ContentBorder />
      <S.ContentWrapper>
        <S.Content>{content}</S.Content>
      </S.ContentWrapper>
      <Modal isOpen={isOpen} onClose={handleModalClose}>
        {message}
      </Modal>
    </S.Container>
  );
}
