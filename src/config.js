// process.env will be replaced at build time by DefinePlugin; it
// doesn't exist in the browser at runtime so guard access to avoid errors.
// if no environment variable is provided, fall back to localhost in
// development but use the public Render URL when running on a remote host.
const RENDER_BACKEND = 'https://kodflix-backend-zwcg.onrender.com';

export const API_URL = (typeof process !== 'undefined' && process.env && process.env.REACT_APP_API_URL)
  ? process.env.REACT_APP_API_URL
  : (typeof window !== 'undefined' && window.location.hostname !== 'localhost'
      ? RENDER_BACKEND
      : 'http://localhost:3001');
