import { useNavigate } from "react-router-dom";
import Login from './login.component'
import Register from './register.component';

const AuthComponent = () => {
  const navigate = useNavigate();

  return (
    <>
      <Login />
      <Register />
      
    </>

  )
}

export default AuthComponent;
