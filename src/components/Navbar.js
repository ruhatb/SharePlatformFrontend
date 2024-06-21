import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/users/usersSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">SharePlatform</Link>
        </div>
        <div>
          {user ? (
            <>
              <span className="mr-4">Welcome, {user.username}</span>
              <button onClick={handleLogout} className="mr-4">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="mr-4">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
