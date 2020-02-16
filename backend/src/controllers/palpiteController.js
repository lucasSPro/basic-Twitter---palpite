const Palpite = require('../models/palpite');

module.exports = {
  async index(req, res) {
    const palpites = await Palpite.find({}).sort('-createdAt');

    return res.json(palpites);
  },

  async store(req, res) {
    const palpite = await Palpite.create(req.body);

    return res.json(palpite);
  },
};
