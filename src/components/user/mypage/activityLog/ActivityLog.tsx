import { useLocation } from 'react-router-dom';
import {
  ACTIVITY_FILTER,
  ACTIVITY_FILTER_ADMIN,
} from '../../../../constants/user/myPageFilter';
import ContentTab from '../ContentTab';

export default function ActivityLog() {
  const { pathname } = useLocation();
  const isAdmin = pathname.includes('/admin');

  return (
    <ContentTab
      $justifyContent='space-around'
      filter={isAdmin ? ACTIVITY_FILTER_ADMIN : ACTIVITY_FILTER}
    />
  );
}
