import React from 'react';
import { API_URL } from './config';

export default function Signup({ onSignupSuccess }) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });
      if (res.status === 201) {
        // Signup successful - now automatically log in
        try {
          const loginRes = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
          });
          
          if (loginRes.ok) {
            const userData = { username };
            localStorage.setItem('kodflix_user', JSON.stringify(userData));
            console.log('Signup and auto-login successful');
            // Trigger parent to show home page
            if (onSignupSuccess) {
              onSignupSuccess(userData);
            }
          } else {
            alert('Account created! Please log in.');
          }
        } catch (loginErr) {
          console.error('Auto-login failed after signup', loginErr);
          alert('Account created! Please log in.');
        }
      } else {
        const data = await res.json();
        alert('Error: ' + (data.message || res.status));
      }
    } catch (networkErr) {
      console.error('Network error during signup', networkErr);
      alert('Network error: could not contact server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <input 
        className="input" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        required
      />
      <input 
        className="input" 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required
      />
      <input 
        className="input" 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        minLength="6"
        required
      />
      <button className="btn" type="submit" disabled={loading}>{loading ? 'Creating...' : 'Get Started'}</button>
      <div className="small">By creating an account you agree to our Terms and Privacy.</div>
    </form>
  );
}
