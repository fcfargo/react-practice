const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user');

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CLIENT_CALLBACK_URL,
    },
    async (accessToken, refreshToken, profile, cb) => {
      const { id } = profile;
      const user = await User.findOne({ googleId: id });
      if (!user) {
        const newUser = User({ googleId: id });
        await newUser.save();

        cb(null, newUser);
      } else {
        cb(null, user);
      }
    }
  )
);
