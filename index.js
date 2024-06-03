const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

require('dotenv').config({ path: `${__dirname}/config/.env` });

const app = express();

app.get('/health-check', (req, rest) => {
  res.send('ok');
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(accessToken);
    }
  )
);

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Listen Port ${PORT}`));
