import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ClickHoc from '../../core/components/click-hoc.component';

const Register = ({clickCount, onClicked}) => {

  const toRegisterPage = () => {
    //navigate(`/register`);
  }

  const authenticateUser = () => {
    //navigate(`/users`);
   }

  return (
  <>
    {
      clickCount >= 3 ? <h1>Too many wrong attempt</h1> : <h1>Register compnent</h1>
    }

    <Button variant="primary" onClick={onClicked}>Register</Button>
  </>
  )
}

export default ClickHoc(Register);
