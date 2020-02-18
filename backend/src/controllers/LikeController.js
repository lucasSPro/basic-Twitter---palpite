const Palpite = require('../models/palpite');

module.exports = {
  async store(req, res) {
    const palpite = await Palpite.findById(req.params.id);

    palpite.set({ likes: palpite.likes + 1 });

    await palpite.save();

    return res.json(palpite);
  },
};
