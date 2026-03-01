import React from 'react';
import Signup from './Signup';
import Login from './Login';

function App() {
  const [page, setPage] = React.useState('login');

  return (
    <div style={{ padding: 20 }}>
      <h1>Kodflix</h1>
      <nav>
        <button onClick={() => setPage('login')}>Login</button>
        <button onClick={() => setPage('signup')}>Signup</button>
      </nav>
      {page === 'login' ? <Login /> : <Signup />}
    </div>
  );
}

export default App;
