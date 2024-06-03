const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

require('dotenv').config({ path: `${__dirname}/config/.env` });

const app = express();

app.get('/health-check', (req, rest) => {
  rest.send('ok');
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'auth/google/callback',
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(accessToken);
    }
  )
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Listen Port ${PORT}`));
