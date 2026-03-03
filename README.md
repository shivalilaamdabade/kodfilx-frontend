# Kodflix Frontend

This is the React-based frontend for Kodflix with authentication.

## Features

- Signup page (username, email, password)
- Login page (username, password)
- Communicates with backend via POST requests to `/signup` and `/login`.
- Redirects on successful login to `https://kodflix-app-one.vercel.app/`.

## Setup

1. Install dependencies: `npm install` or `yarn`
2. (Optional) create a `.env` file with `REACT_APP_API_URL` if your backend runs somewhere other than localhost. Example:
   ```
   REACT_APP_API_URL=http://localhost:3001
   ```
3. Start development server: `npm start` or `yarn start`

## Production build

Run `npm run build` to compile the app. The resulting `bundle.js` will be written into `public/`, which is what your deployment platform (e.g. Vercel) will serve at `/bundle.js`.

## Deployment

Push this repo to GitHub and connect to Vercel for automatic deployments.
