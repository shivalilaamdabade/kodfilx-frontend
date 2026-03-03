import React from 'react';
import Signup from './Signup';
import Login from './Login';
import './netflix.css';

function App() {
  const [page, setPage] = React.useState('login');

  return (
    <div className="hero">
      <div className="overlay" />
      <div className="logo">Kodflix</div>
      <div className="container">
        <div className="card">
          {page === 'login' ? <Login /> : <Signup />}
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
