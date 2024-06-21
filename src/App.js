import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import PrivateRoute from './components/PrivateRoute';
import PostList from './components/PostList';
import LeftBar from './components/LeftBar';
import CenterContent from './components/CenterContent';
import RightBar from './components/RightBar';
import { login } from './features/users/usersSlice';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      dispatch(login.fulfilled({ payload: user }));
    }
  }, [dispatch]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex">
          <div className="w-1/4 bg-yellow p-4">
            <LeftBar />
          </div>
          <div className="w-1/2 bg-turquoise p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/posts" element={<PrivateRoute component={PostList} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <div className="w-1/4 bg-burgundy p-4">
            <RightBar />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
