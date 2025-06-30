import ContentTab from '../../../components/user/mypage/ContentTab';
import { PROJECT_TABS } from '../../../constants/admin/userDetailContentHeader';

export default function AdminUserProjectsLayout() {
  return (
    <div>
      <ContentTab filter={PROJECT_TABS} $justifyContent='space-evenly' />
    </div>
  );
}
