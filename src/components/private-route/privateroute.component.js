import { Navigate } from 'react-router-dom';
import authenticate from '../service/auth';

export default function PrivateRoute({ children }) {
  const auth = authenticate();

  return auth ? children : <Navigate to='/' />;
}
