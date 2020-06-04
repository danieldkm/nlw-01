import express from 'express';

const app = express();

app.use(express.json())

const users = ['daniel', 'keyti', 'morita']

app.get('/users', (request, response) => {
  const search = String(request.query.search);

  const filteredUsers = search ? users.filter(user => user.includes(search)) : users

  response.json(filteredUsers);
})

app.get('/users/:id', (request, response) => {
  const id = Number(request.params.id);
  response.json(users[id]);
})

app.post('/users', (request, response) => {
  const user = request.body;

  users.push(user)

  return response.json(user);
})

app.listen(3333);