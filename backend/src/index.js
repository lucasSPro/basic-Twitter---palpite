const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

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

app.use(cors());
app.use((req, res, next) => {
  req.io = io;
  return next();
});
app.use(express.json());
app.use(routes);

server.listen(3000, () => {
  console.log('Server starded');
});
