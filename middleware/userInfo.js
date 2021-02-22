module.exports = (req, res, next) => {
  const { displayName, email, password } = req.body;
  const regEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  if (email && !email.match(regEmail)) {
    return res.status(400).json({ message: 'email invalid' });
  }
  if (displayName && displayName.length < 8) {
    return res.status(400).json({ message: 'invalid name' });
  }
  if (password && password.length < 6) {
    return res.status(400).json({ message: '"password" pass' });
  }
  return next();
};
