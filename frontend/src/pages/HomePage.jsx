import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
    <Link to="/login">
        <button>Login</button>
    </Link>
     <Link to="/signup">
     <button>Signup page</button>
 </Link>
 </>
  );
}

export default HomePage;
