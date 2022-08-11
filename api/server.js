const express = require('express');
const server = express();

server.use(express.json());

server.get('/api/users', (req, res) => {
  res.send([])
});

server.post('/api/register', (req, res) => {
  //console.log(req.body)
  res.send(req.body.username)
});

server.post('/api/login', (req, res) => {
  const message = `Well, hello there, ${req.body.username}! Welcome to the internet!`
  res.send(message);
})

module.exports = server;