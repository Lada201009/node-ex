const { Phone } = require('../models');

module.exports.getPhones = async (req, res, next) => {
  try {
    const foundPhones = await Phone.getAll();
    res.status(200).send(foundPhones);
  } catch (err) {
    next(err);
  }
};