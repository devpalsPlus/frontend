import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import { lazy, Suspense } from 'react';
import { ADMIN_ROUTE } from '../constants/routes';
import ProtectAdminRoute from './ProtectAdminRoute';
import { Spinner } from '../components/common/loadingSpinner/LoadingSpinner.styled';

const Sidebar = lazy(
  () => import('../components/common/admin/sidebar/AdminSidebar')
);
const Main = lazy(() => import('../pages/admin/adminMain/AdminMain'));
const Notice = lazy(() => import('../pages/admin/adminNotice/AdminNotice'));
const NoticeList = lazy(
  () => import('../pages/admin/adminNotice/adminNoticeList/AdminNoticeListPage')
);
const NoticeWrite = lazy(
  () =>
    import('../pages/admin/adminNotice/adminNoticeWrite/AdminNoticeWritePage')
);
const NoticeDetail = lazy(
  () => import('../pages/admin/adminNoticeDetail/AdminNoticeDetail')
);
const FAQ = lazy(() => import('../pages/admin/adminFAQ/AdminFAQ'));
const FAQList = lazy(
  () => import('../pages/admin/adminFAQ/adminFAQList/AdminFAQListPage')
);
const FAQWrite = lazy(
  () => import('../pages/admin/adminFAQ/adminFAQWrite/AdminFAQWritePage')
);
const Banner = lazy(() => import('../pages/admin/adminBanner/AdminBanner'));
const Tags = lazy(() => import('../pages/admin/adminTags/AdminTags'));
const AllUser = lazy(() => import('../pages/admin/adminAllUser/AdminAllUser'));
const Reports = lazy(() => import('../pages/admin/adminReports/AdminReports'));
const Inquiries = lazy(
  () => import('../pages/admin/adminInquiries/AdminInquiries')
);
const InquiryList = lazy(
  () =>
    import(
      '../pages/admin/adminInquiries/adminInquiryList/AdminInquiryListPage'
    )
);
const InquiryDetail = lazy(
  () =>
    import(
      '../pages/admin/adminInquiries/adminInquiryDetail/AdminInquiryDetailPage'
    )
);
const InquiryAnswerContent = lazy(
  () => import('../components/admin/adminInquiry/AdminInquiryAnswer')
);
const InquiryAnswerWrite = lazy(
  () =>
    import(
      '../pages/admin/adminInquiries/adminInquiryWrite/AdminInquiryWritePage'
    )
);
const Manage = lazy(() => import('../pages/admin/adminManage/AdminManage'));

export const AdminRoutes = () => {
  const routeList = [
    {
      path: ADMIN_ROUTE.admin,
      element: (
        <Suspense fallback={<Spinner />}>
          <ProtectAdminRoute>
            <Sidebar />
          </ProtectAdminRoute>
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: <Notice />,
        },
        {
          path: ADMIN_ROUTE.notice,
          element: <Notice />,
          children: [
            { index: true, element: <NoticeList /> },
            {
              path: ADMIN_ROUTE.write,
              element: <NoticeWrite />,
            },
            {
              path: `${ADMIN_ROUTE.detail}/:noticeId`,
              element: <NoticeDetail />,
            },
            {
              path: `${ADMIN_ROUTE.detail}/:noticeId/${ADMIN_ROUTE.modification}`,
              element: <NoticeWrite />,
            },
          ],
        },
        {
          path: ADMIN_ROUTE.faq,
          element: <FAQ />,
          children: [
            { index: true, element: <FAQList /> },
            { path: ADMIN_ROUTE.write, element: <FAQWrite /> },
            {
              path: `${ADMIN_ROUTE.modification}/:faqId`,
              element: <FAQWrite />,
            },
          ],
        },
        {
          path: ADMIN_ROUTE.banner,
          element: <Banner />,
        },
        {
          path: ADMIN_ROUTE.tags,
          element: <Tags />,
        },
        {
          path: ADMIN_ROUTE.allUser,
          element: <AllUser />,
        },
        {
          path: ADMIN_ROUTE.reports,
          element: <Reports />,
        },
        {
          path: ADMIN_ROUTE.inquiries,
          element: <Inquiries />,
          children: [
            { index: true, element: <InquiryList /> },
            {
              path: `${ADMIN_ROUTE.detail}/:inquiryId`,
              element: <InquiryDetail />,
              children: [
                { index: true, element: <InquiryAnswerContent /> },
                {
                  path: ADMIN_ROUTE.write,
                  element: <InquiryAnswerWrite />,
                },
                {
                  path: ADMIN_ROUTE.modification,
                  element: <InquiryAnswerWrite />,
                },
              ],
            },
          ],
        },
        {
          path: ADMIN_ROUTE.manage,
          element: <Manage />,
        },
      ],
    },
  ];

  const newAdminRoutes = routeList.map((items) => {
    return { ...items, errorElement: <NotFoundPage /> };
  });

  return newAdminRoutes;
};

export default AdminRoutes;
