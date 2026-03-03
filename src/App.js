import React from 'react';
import Signup from './Signup';
import Login from './Login';
import './netflix.css';

function App() {
  const [page, setPage] = React.useState('login');
  const [user, setUser] = React.useState(null);

  // Check if user is already logged in (from localStorage)
  React.useEffect(() => {
    const savedUser = localStorage.getItem('kodflix_user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        setUser(userData);
      } catch (e) {
        console.error('Error parsing saved user', e);
        localStorage.removeItem('kodflix_user');
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('kodflix_user');
    setUser(null);
  };

  // If user is logged in, show home page
  if (user) {
    return (
      <div className="hero">
        <div className="overlay" />
        <div className="logo">Kodflix</div>
        <div className="container" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div className="card">
            <h2>Welcome back, {user.username}!</h2>
            <p style={{ color: '#b3b3b3', margin: '20px 0' }}>You are successfully logged in.</p>
            <button className="btn" onClick={handleLogout} style={{ maxWidth: '200px' }}>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Show login/signup form
  return (
    <div className="hero">
      <div className="overlay" />
      <div className="logo">Kodflix</div>
      <div className="container">
        <div className="card">
          {page === 'login' ? (
            <Login setUser={setUser} />
          ) : (
            <Signup onSignupSuccess={(userData) => {
              setUser(userData);
            }} />
          )}
          <div className="center-note">
            {page === 'login' ? (
              <span className="muted-link">New here? <button className="muted-link" onClick={() => setPage('signup')}>Create an account</button></span>
            ) : (
              <span className="muted-link">Have an account? <button className="muted-link" onClick={() => setPage('login')}>Sign in</button></span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
