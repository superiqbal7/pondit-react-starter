import { Navigate, Outlet } from 'react-router-dom';
import authenticate from '../service/auth';

export default function PrivateRoute() {
  const auth = authenticate();

  return auth ? <Outlet /> : <Navigate to='/' />;
}
