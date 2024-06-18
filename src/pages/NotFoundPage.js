import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl">404 - Page Not Found</h1>
      <Link to="/" className="text-blue-600">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
