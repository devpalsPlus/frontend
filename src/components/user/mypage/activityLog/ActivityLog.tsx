import {
  ACTIVITY_FILTER,
  ACTIVITY_FILTER_ADMIN,
} from '../../../../constants/user/myPageFilter';
import ContentTab from '../ContentTab';
import useAuthStore from '../../../../store/authStore';

export default function ActivityLog() {
  const isAdmin = useAuthStore().userData?.admin;

  return (
    <ContentTab
      $justifyContent='space-around'
      filter={isAdmin ? ACTIVITY_FILTER_ADMIN : ACTIVITY_FILTER}
    />
  );
}
