import { useState } from 'react';

export default function LoginInfo() {
  // We need to use state to track the information in the input fields
  // We also need to use the event handler to handle the events of submission
  const [email, setEmail] = useState('');  // Initialize with an empty string
  const [password, setPassword] = useState('');  // Initialize with an empty string

  return (
    <div>
      {/* 
        'e' is the event property of the onChange function.
        The target element is the DOM property of 'e' that triggered the event,
        which in this case is the input. The value property gives the current
        value of the input field.
      */}
      <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}  // Update the email state
      />
      
      <input  type="password"  // Set type to 'password' for password input
        value={password} 
        placeholder="Password"  // Corrected placeholder to 'Password'
        onChange={(e) => setPassword(e.target.value)}  // Update the password state
      />

      {/* Display the entered email */}
      <p>Your entered email: {email}</p>

      {/* Button to submit the form and show an alert with email and password */}
      <button onClick={() => alert(`Email: ${email}, Password: ${password}`)}>
        Submit
      </button>
    </div>
  );
}
