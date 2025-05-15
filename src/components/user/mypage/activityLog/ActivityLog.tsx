import { ACTIVITY_FILTER } from '../../../../constants/user/myPageFilter';
import ContentTab from '../ContentTab';

export default function ActivityLog() {
  return <ContentTab $justifyContent='space-around' filter={ACTIVITY_FILTER} />;
}
