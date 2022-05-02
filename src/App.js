import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import UserInfo from './components/UserInfo/UserInfo';
import Users from './components/Users/Users';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="user/:userId" element={<UserInfo />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
