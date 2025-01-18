import { PropsWithChildren } from 'react';
import useAuthStore from '../../store/authStore';
import { Navigate } from 'react-router-dom';
interface ProtectRouteProps extends PropsWithChildren {
  redirectUrl: string;
}

const ProtectRoute = ({ children, redirectUrl }: ProtectRouteProps) => {
  const { isLoggedIn } = useAuthStore();
  return isLoggedIn ? <>{children}</> : <Navigate to={redirectUrl} />;
};

export default ProtectRoute;
