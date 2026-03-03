import React from 'react';
import { API_URL } from './config';

export default function Login({ setUser }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log('Login successful:', data);
        // Save user info to localStorage
        const userData = { username };
        localStorage.setItem('kodflix_user', JSON.stringify(userData));
        
        // Redirect to the main Vercel URL like Netflix
        window.location.href = 'https://kodflix-app-one.vercel.app/';
      } else {
        const data = await res.json();
        alert('Error: ' + (data.message || res.status));
      }
    } catch (err) {
      console.error(err);
      alert('Network error: could not reach server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input 
        className="input" 
        placeholder="Username or Email" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        required
      />
      <input 
        className="input" 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required
      />
      <button className="btn" type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign In'}</button>
      <div className="small">This page is protected — use your account to continue.</div>
    </form>
  );
}
