import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/navbar/navbar.component'
import Dashboard from './components/dashboard/dashboard.component';
import Home from './components/Home/home.component';
import Error from './components/error/error.component';
import UserProfile from './components/user-profile/userprofile.component';
import PrivateRoute from './components/private-route/privateroute.component';
import PrivateOutlet from './components/private-outlet/private-outlet';

const App = () => {
  return (
    <>
      <Header />
      {/* <Dashboard /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="user/:id" element={<PrivateRoute><UserProfile /></PrivateRoute>} />
        <Route path="user/:id" element={<PrivateOutlet />}>
          <Route path="user/:id" element={<UserProfile />} />
        </Route>
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;


