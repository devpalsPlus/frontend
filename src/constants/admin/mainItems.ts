import GraphCard from '../../components/admin/mainCard/graphCard/GraphCard';
import AllUserPreview from '../../components/admin/previewComponent/allUserPreview/AllUserPreview';
import InquiresPreview from '../../components/admin/previewComponent/inquiresPreview/InquiresPreview';
import NoticePreview from '../../components/admin/previewComponent/noticePreview/NoticePreview';
import ReportsPreview from '../../components/admin/previewComponent/reportsPreview/ReportsPreview';
import { ADMIN_ROUTE } from '../routes';

export interface CardItem {
  key: string;
  title: string;
  link?: string;
  Component: React.FC;
}

export const cardList: CardItem[] = [
  {
    key: 'allUsers',
    title: '전체 회원 조회',
    link: `${ADMIN_ROUTE.allUser}`,
    Component: AllUserPreview,
  },
  {
    key: 'inquiries',
    title: '문의 확인',
    link: `${ADMIN_ROUTE.inquiries}`,
    Component: InquiresPreview,
  },
  {
    key: 'reports',
    title: '신고 검토',
    link: `${ADMIN_ROUTE.reports}`,
    Component: ReportsPreview,
  },
  {
    key: 'Graph',
    title: '방문자 현황',
    Component: GraphCard,
  },
  {
    key: 'notice',
    title: '공지사항',
    link: `${ADMIN_ROUTE.notice}`,
    Component: NoticePreview,
  },
];
