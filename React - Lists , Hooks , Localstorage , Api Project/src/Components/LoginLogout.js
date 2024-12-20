import React, { useState } from 'react';
import '../App.css';

function LoginLogout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app-container">
      <div className="navigation">
        <span>Navigation</span>
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <button onClick={handleLogin}>Login</button>
        )}
      </div>
      <div className="content">
        {isLoggedIn ? <PrivateViews /> : <PublicViews />}
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

function PublicViews() {
  return <div className="view">Public Views</div>;
}

function PrivateViews() {
  return <div className="view">Private Views</div>;
}

export default LoginLogout;