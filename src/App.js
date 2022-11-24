import { Routes, Route } from 'react-router-dom';
import Header from './components/navbar/navbar.component'
import Dashboard from './components/dashboard/dashboard.component';
import Error from './components/error/error.component';
import UserProfile from './components/user-profile/userprofile.component';
import PrivateRoute from './core/components/privateRoute.component';
import PrivateOutlet from './core/components/privateOutlet.component';
import AuthComponent from './components/Auth/auth.component';
import Register from './components/Auth/register.component';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AuthComponent />} />
        <Route path="/login" element={<AuthComponent />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/users" element={<PrivateRoute> <Dashboard /> </PrivateRoute> } />
        <Route path="users/:id" element={<PrivateRoute> <UserProfile /> </PrivateRoute>}/> */}
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="users/" element={<Dashboard />}/>
          <Route path="users/:id" element={<UserProfile />}/>
        </Route>
        {/* <Route path="/*" element={<Error />} /> */}
      </Routes>
    </>
  );
}

export default App;

{/* <Routes>
<Route path="/" element={<Dashboard />}>
  <Route
    path="messages"
    element={}
  />
  <Route path="tasks" element={} />
</Route>
<Route path="about" element={} />
</Routes> */}
