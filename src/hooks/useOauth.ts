import { useQuery } from '@tanstack/react-query';
import { getOauthLogin } from '../api/auth.api';

export const useOauth = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: [],
    queryFn: () => getOauthLogin(),
  });
};
