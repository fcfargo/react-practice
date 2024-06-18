const stripe = require('stripe')(process.env.STRIVE_SECRET_KEY);
const Survey = require('../models/survey');
const requrieAuth = require('../middlewares/requreAuth');
const requireCredits = require('../middlewares/requireCredits');

module.exports = (app) => {
  app.post('/api/surveys', requrieAuth, requireCredits, async (req, res) => {
    const userId = req.user._id;
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(',')
        .map((email) => ({ email: email.trim() })),
      userId,
    });

    await survey.save();

    return res.send(survey);
  });
};
