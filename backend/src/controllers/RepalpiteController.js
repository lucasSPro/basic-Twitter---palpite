const Palpite = require('../models/palpite');

module.exports = {
  async store(req, res) {
    const palpite = await Palpite.findById(req.params.id);

    palpite.set({ repalpite: palpite.repalpite + 1 });

    await palpite.save();

    req.io.emit('repalpite', palpite);

    return res.json(palpite);
  },
};
