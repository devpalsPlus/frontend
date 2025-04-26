import { notificationFilter } from '../../../constants/myPageFilter';
import ContentTab from '../ContentTab';

export default function Notifications() {
  return (
    <ContentTab $justifyContent='space-between' filter={notificationFilter} />
  );
}
