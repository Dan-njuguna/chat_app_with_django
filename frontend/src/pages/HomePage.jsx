import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/LoginInfo">Login</Link></li>
          <li><Link to="/SignupInfo">Signup</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;

