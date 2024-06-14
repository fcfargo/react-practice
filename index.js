const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const passport = require('passport');
require('dotenv').config({ path: `${__dirname}/config/.env` });

require('./services/passport');

mongoose.connect(process.env.MONGO_URI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());

require('./controllers/authController')(app);
require('./controllers/billingController')(app);

app.get('/health-check', (req, res) => {
  res.send('ok');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Listen Port ${PORT}`));
