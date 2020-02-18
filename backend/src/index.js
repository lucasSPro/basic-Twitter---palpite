const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');
const env = require('./env');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect(
  `mongodb+srv://goweek:${env.password}@cluster0-ikt19.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

app.use((req, res) => {
  req.io = io;
});
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log('Server starded');
});
