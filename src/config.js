// process.env will be replaced at build time by DefinePlugin; it
// doesn't exist in the browser at runtime so guard access to avoid errors.
export const API_URL = (typeof process !== 'undefined' && process.env && process.env.REACT_APP_API_URL)
  ? process.env.REACT_APP_API_URL
  : 'http://localhost:3001';
