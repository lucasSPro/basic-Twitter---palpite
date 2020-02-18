const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const env = require('./env');

const app = express();

mongoose.connect(
  `mongodb+srv://goweek:${env.password}@cluster0-ikt19.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

// mongodb+srv://goweek:<password>@cluster0-ikt19.mongodb.net/test?retryWrites=true&w=majority

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('Server starded');
});
