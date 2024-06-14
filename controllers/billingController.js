const stripe = require('stripe')(process.env.STRIVE_SECRET_KEY);

module.exports = (app) => {
  app.post('/api/stripe', (req, res) => {
    console.log(req.body);
  });
};
