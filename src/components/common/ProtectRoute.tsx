import { PropsWithChildren } from 'react';
import useAuthStore from '../../store/authStore';
import { Navigate } from 'react-router-dom';
interface ProtectRouteProps extends PropsWithChildren {
  redirectUrl: string;
}

const ProtectRoute = ({ children, redirectUrl }: ProtectRouteProps) => {
  const { isLoggedIn } = useAuthStore();

  if (!isLoggedIn) {
    alert('로그인이 필요한 서비스입니다.');
    return <Navigate to={redirectUrl} replace />;
  }

  return <>{children}</>;
};

export default ProtectRoute;
