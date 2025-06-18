import NoticeDetailBundle from '../../../components/user/customerService/noticeDetail/NoticeDetailBundle';
import useAuthStore from '../../../store/authStore';

export default function AdminNoticeDetail() {
  const isAdmin = useAuthStore((state) => state.userData?.admin) ?? false;

  return <NoticeDetailBundle $width='90%' $isAdmin={isAdmin} />;
}
