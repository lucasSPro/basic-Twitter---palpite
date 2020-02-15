const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  'mongodb+srv://goweek:goweek@cluster0-ikt19.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);


app.get('/', (req, res) => res.send('hello world'));

app.listen(3000, () => {
  console.log('Server starded');
});
