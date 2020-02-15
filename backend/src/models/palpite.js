const mongoose = require('mongoose');


const palpiteSchema = new mongoose.Schema({
  author: String,
  content: String,
  Comments: [],
  repalpite: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});

module.exports = mongoose.model('Palpite', palpiteSchema);
