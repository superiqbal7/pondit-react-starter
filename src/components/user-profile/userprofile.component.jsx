import { useLocation } from 'react-router-dom';

const UserProfile = () => {
  const {state} = useLocation()
  return (
    <>
      <h1>Id: {state.id}</h1>
      <h2>Name: {state.name}</h2>
      <h2>Email: {state.email}</h2>
    </>
    
  )
}

export default UserProfile;
// id, name, email
