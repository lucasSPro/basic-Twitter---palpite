const Palpite = require('../models/palpite');

module.exports = {
  async store(req, res) {
    const palpite = await Palpite.findById(req.params.id);

    palpite.set({ likes: palpite.likes + 1 });

    await palpite.save();

    req.io.emit('like', palpite);

    return res.json(palpite);
  },
};
