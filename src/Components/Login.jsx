import React, { useState } from 'react';
import React, { useState, useEffect } from 'react';

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Perform client-side validation
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }

    // Replace this section with actual server-side login logic if required
    // In this example, we'll simulate successful login with username 'user' and password 'password'
    if (username === 'user' && password === 'password') {
      // Save the logged-in status in local storage
      localStorage.setItem('isLoggedIn', 'true');

      // Save the username in local storage (you can store other user data as well)
      localStorage.setItem('username', username);

      // Trigger the onLogin function passed from the App component
      onLogin();
    } else {
      alert('Invalid username or password.');
    }
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
