import { activityFilter } from '../../../constants/myPageFilter';
import ContentTab from '../ContentTab';

export default function ActivityLog() {
  return (
    <>
      <ContentTab $justifyContent='space-around' filter={activityFilter} />
    </>
  );
}
