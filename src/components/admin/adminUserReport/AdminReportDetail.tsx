import React from 'react';
import * as S from './AdminReportDetail.styled';
import AdminTitle from '../../common/admin/title/AdminTitle';
import Avatar from '../../common/avatar/Avatar';
import defaultImg from '../../../assets/defaultImg.png';
import ReportCheckBox from '../../common/reportCheckBox/ReportCheckBox';
import ScrollPreventor from '../../common/modal/ScrollPreventor';
import { Link, useParams } from 'react-router-dom';
import { useGetReportDetail } from '../../../hooks/admin/useAdminReportDetail';
import { Spinner } from '../../common/loadingSpinner/LoadingSpinner.styled';
import { formatDate } from '../../../util/formatDate';
import { useHandleUser } from '../../../hooks/admin/useHandleUser';
import { useModal } from '../../../hooks/useModal';
import Modal from '../../common/modal/Modal';
import { REPORT_CATEGORY_LIST } from '../../../constants/admin/adminReportCategoryList';

export default function AdminReportDetail() {
  const { id: reportId } = useParams();

  const { reportDetailData, isLoading, isFetching } = useGetReportDetail(
    Number(reportId)
  );

  const { isOpen, message, handleModalOpen, handleModalClose, handleConfirm } =
    useModal();

  const { handleClickBanButton, handleClickWarningButton } = useHandleUser({
    handleModalOpen,
    handleConfirm,
  });

  if (!reportDetailData) {
    return <S.Spinner>신고 상세 정보를 찾을 수 없습니다.</S.Spinner>;
  }

  if (isLoading || isFetching) {
    return (
      <S.Spinner>
        <Spinner />
      </S.Spinner>
    );
  }

  const linkUrl = (
    id: number,
    location: 'USER' | 'PROJECT' | 'COMMENT' | 'RECOMMENT'
  ) => {
    if (
      location === 'PROJECT' ||
      location === 'COMMENT' ||
      location === 'RECOMMENT'
    ) {
      return `/project-detail/${id}`;
    } else {
      return `/user/${id}`;
    }
  };

  return (
    <ScrollPreventor>
      <AdminTitle title='신고 검토 상세' />
      <S.Container>
        <S.Wrapper>
          <S.HeaderContainer>
            <S.UserContainer>
              <Link to={`/admin/users/${reportDetailData.reporter.userId}`}>
                <Avatar
                  image={
                    reportDetailData.reporter.profileImg
                      ? reportDetailData.reporter.profileImg
                      : defaultImg
                  }
                  size='50px'
                />
                <S.NickName>{reportDetailData.reporter.nickname}</S.NickName>
              </Link>
            </S.UserContainer>
            <S.Arrow>
              <S.Category>신고</S.Category>
            </S.Arrow>
            <S.UserContainer>
              <Link to={`/admin/users/${reportDetailData.reportedUser.userId}`}>
                <Avatar
                  image={
                    reportDetailData.reportedUser.profileImg
                      ? reportDetailData.reportedUser.profileImg
                      : defaultImg
                  }
                  size='47px'
                />
                <S.NickName>
                  {reportDetailData.reportedUser.nickname}
                </S.NickName>
              </Link>
            </S.UserContainer>
          </S.HeaderContainer>
          <S.ContentContainer>
            <S.ContentHeader>
              <ReportCheckBox
                isAdmin={true}
                selectedCheckbox={reportDetailData.category.map(
                  (num) => REPORT_CATEGORY_LIST[num - 1]
                )}
              />
              <S.Date>{formatDate(reportDetailData.reportedAt)}</S.Date>
            </S.ContentHeader>
            <S.Divider />
            <S.Scroll>
              <S.Content>{reportDetailData.reason}</S.Content>
            </S.Scroll>
          </S.ContentContainer>
          <S.ConfirmContainer>
            <S.ConfirmArea
              to={linkUrl(
                reportDetailData.locationId,
                reportDetailData.location
              )}
              target='_blank'
              rel='noopener noreferrer'
            >
              <S.ConfirmButton radius='primary' schema='primary' size='primary'>
                검토 하기
              </S.ConfirmButton>
            </S.ConfirmArea>
            <S.ButtonArea>
              <S.WarningButton
                radius='primary'
                schema='primary'
                size='primary'
                //userId
                onClick={(e) =>
                  handleClickWarningButton(
                    e,
                    reportDetailData.reportedUser.userId
                  )
                }
              >
                경고
              </S.WarningButton>
              <S.BanButton
                radius='primary'
                schema='primary'
                size='primary'
                //userId
                onClick={(e) =>
                  handleClickBanButton(e, reportDetailData.reportedUser.userId)
                }
              >
                강퇴
              </S.BanButton>
            </S.ButtonArea>
          </S.ConfirmContainer>
        </S.Wrapper>
      </S.Container>
      <Modal
        isOpen={isOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirm}
      >
        {message}
      </Modal>
    </ScrollPreventor>
  );
}
