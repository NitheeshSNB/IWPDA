import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Welcome = () => {
  const location = useLocation();
  const { name } = location.state || { name: 'Guest' };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome, {name}!
        </h1>
        <p className="text-gray-600 mb-8">
          Thank you for completing the registration.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Back to Form
        </Link>
      </div>
    </div>
  );
};

export default Welcome;