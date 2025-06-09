import { useQuery } from '@tanstack/react-query';
import {
  getUserJoinedProjectList,
  getUserManagedProjectList,
} from '../../api/userpage.api';
import { userInfoKey } from '../queries/keys';
import { useLocation, useParams } from 'react-router-dom';
import type { ApiUserProject } from '../../models/userProject';

export const useGetUserProjectList = () => {
  const { userId } = useParams();
  const location = useLocation();
  const isJoinedPage = location.pathname.includes('joined') ? true : false;
  const title = isJoinedPage
    ? '참여한 프로젝트 리스트'
    : '기획한 프로젝트 리스트';

  const { data, isLoading } = useQuery<ApiUserProject>({
    queryKey: [userInfoKey.userManagedList, userId, isJoinedPage],
    queryFn: () =>
      isJoinedPage
        ? getUserJoinedProjectList(Number(userId))
        : getUserManagedProjectList(Number(userId)),
  });

  return { userProjectData: data?.data, isLoading, title };
};
