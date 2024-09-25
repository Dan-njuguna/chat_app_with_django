import React, { useState } from 'react';

export default function SignupInfo() {
  const [email, setEmail] = useState(''); // Initialize email with an empty string

  return (
    <header id="Sign up">Sign up
      <div>
        {/* 
          Correct input tag: self-closing, and corrected syntax for onChange
        */}
        <input 
          value={email} 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)} 
        />

        {/* 
          Corrected the string interpolation for alert
        */}
        <button onClick={() => alert(`Email: ${email}`)}>Signup</button>
      </div>
    </header>
  );
}
