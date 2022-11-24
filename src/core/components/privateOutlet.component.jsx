import useAuthenticate from '../service/authentication'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateOutlet = () => {
  const auth = useAuthenticate();

  return auth ? <Outlet /> : <Navigate to="/Login"/>;
}

export default PrivateOutlet;
