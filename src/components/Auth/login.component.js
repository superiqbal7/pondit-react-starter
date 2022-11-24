import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ClickHoc from '../../core/components/click-hoc.component';

const Login = ({clickCount, onClicked}) => {
  const authenticateUser = () => {
    //navigate(`/users`);
  }

  return (
  <>
    {
      clickCount >= 3 ? <h1>Too many wrong attempt</h1> : <h1>Login compnent</h1>
    }

    <Button variant="primary" onClick={onClicked}>Login</Button>
  </>
  )
}

export default ClickHoc(Login);
