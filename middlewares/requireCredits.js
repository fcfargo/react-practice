module.exports = (req, res, next) => {
  if (!req.user.credits) {
    return res.status(403).json({ error: 'Not enought credits!' });
  }

  next();
};
