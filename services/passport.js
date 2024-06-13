const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CLIENT_CALLBACK_URL,
      Proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      const { id } = profile;
      const user = await User.findOne({ googleId: id });
      if (!user) {
        const newUser = User({ googleId: id });
        await newUser.save();

        done(null, newUser);
      } else {
        done(null, user);
      }
    }
  )
);
