import useAuthenticate from '../service/authentication'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const auth = useAuthenticate();

  return auth ? children : <Navigate to="/Login"/>;
}

export default PrivateRoute;
