const express = require('express');
const server = express();

server.use(express.json());

const fakeUsers = [
  { username: "mario", password: "it's-a-me" },
  { username: "gandalf", password: "grayPilgrim" },
]

server.get('/', (req, res) => {
  res.send('I sure hope this is what we were supposed to deploy')
})

server.get('/api/users', (req, res) => {
  res.send(fakeUsers)
});

server.post('/api/register', (req, res) => {
  //console.log(req.body)
  fakeUsers.push(req.body)
  res.send(req.body.username)
});

server.post('/api/login', (req, res) => {
  const message = `Well, hello there, ${req.body.username}! Welcome to the internet!`
  res.send(message);
})

module.exports = server;