import { Routes, Route } from 'react-router-dom';
import Header from './components/navbar/navbar.component'
import Dashboard from './components/dashboard/dashboard.component';
import Home from './components/Home/home.component';
import Error from './components/error/error.component';
import UserProfile from './components/user-profile/userprofile.component';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="user/:id" element={<UserProfile />} />
        <Route path="/*" element={<Error />} />
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
