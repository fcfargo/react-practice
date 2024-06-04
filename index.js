const express = require('express');

require('dotenv').config({ path: `${__dirname}/config/.env` });

const app = express();

require('./services/passport');
require('./controllers/authController')(app);

app.get('/health-check', (req, res) => {
  res.send('ok');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server Listen Port ${PORT}`));
