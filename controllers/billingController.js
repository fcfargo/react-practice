const stripe = require('stripe')(process.env.STRIVE_SECRET_KEY);
const User = require('../models/user');
const requrieAuth = require('../middlewares/requreAuth');

module.exports = (app) => {
  app.post('/api/stripe', requrieAuth, async (req, res) => {
    const { token } = req.body;
    const userId = req.user._id;
    const uniquePaymentId = token.id;

    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: uniquePaymentId,
    });

    const user = await User.findByIdAndUpdate(userId, { $inc: { credits: 5 } });

    res.send(user);
  });
};
