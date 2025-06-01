import * as S from './ReportsPreview.styled';
import { useGetAllReports } from '../../../../hooks/admin/useGetAllReports';
import Avatar from '../../../common/avatar/Avatar';
import arrow_right from '../../../../assets/ArrowRight.svg';
import { ADMIN_ROUTE } from '../../../../constants/routes';

const ReportsPreview = () => {
  const { allReportsData } = useGetAllReports();

  const previewList = allReportsData
    ? allReportsData.length > 6
      ? allReportsData.slice(0, 4)
      : allReportsData
    : [];

  return (
    <S.Container>
      {previewList?.map((report) => (
        <S.Wrapper>
          <S.ReportArea to={`${ADMIN_ROUTE.reports}/${report.id}`}>
            <Avatar image={report.user.img} size='40px' />
            <S.ContentArea>
              <S.ImposedCount>{report.imposedCount} 번</S.ImposedCount>
              <S.Category>{report.category}</S.Category>
              <S.StateArea>
                <S.Date>{report.createdAt}</S.Date>
                <S.Divider>|</S.Divider>
                <S.IsImposed $isImposed={report.IsImposed}>
                  {report.IsImposed ? '검토 완료' : '검토 미완료'}
                </S.IsImposed>
              </S.StateArea>
            </S.ContentArea>
          </S.ReportArea>
          <S.MoveToReportsArea to={`${ADMIN_ROUTE.reports}/${report.id}`}>
            <S.Text>신고 상세 보기</S.Text>
            <S.Arrow src={arrow_right}></S.Arrow>
          </S.MoveToReportsArea>
        </S.Wrapper>
      ))}
    </S.Container>
  );
};

export default ReportsPreview;
