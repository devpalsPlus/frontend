import { NOTIFICATION_FILTER } from '../../../constants/myPageFilter';
import ContentTab from '../ContentTab';

export default function Notifications() {
  return (
    <ContentTab $justifyContent='space-between' filter={NOTIFICATION_FILTER} />
  );
}
