import * as S from './ReportsPreview.styled';
import Avatar from '../../../common/avatar/Avatar';
import arrow_right from '../../../../assets/ArrowRight.svg';
import { ADMIN_ROUTE } from '../../../../constants/routes';
import { Spinner } from '../../../common/loadingSpinner/LoadingSpinner.styled';
import { useGetAllReportsPreview } from '../../../../hooks/admin/useGetAllReportsPreview';

const ReportsPreview = () => {
  const { allReportsData, isLoading, isFetching } = useGetAllReportsPreview();

  if (isLoading || isFetching) {
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    );
  }

  return (
    <S.Container>
      {allReportsData?.map((report) => (
        <S.Wrapper key={report.reportId}>
          <S.ReportArea to={`${ADMIN_ROUTE.reports}/${report.reportId}`}>
            <Avatar image={report.profileImg} size='40px' />
            <S.ContentArea>
              <S.ReportedCount>{report.warning} 번</S.ReportedCount>
              <S.Category>{report.category}</S.Category>
              <S.StateArea>
                <S.ReportDate>{report.reportedAt}</S.ReportDate>
                <S.Divider>|</S.Divider>
                <S.IsDone $isDone={report.imposed}>
                  {report.imposed ? '검토 완료' : '검토 미완료'}
                </S.IsDone>
              </S.StateArea>
            </S.ContentArea>
          </S.ReportArea>
          <S.MoveToReportsArea to={`${ADMIN_ROUTE.reports}/${report.reportId}`}>
            <S.Text>신고 상세 보기</S.Text>
            <S.Arrow src={arrow_right}></S.Arrow>
          </S.MoveToReportsArea>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default ReportsPreview;
