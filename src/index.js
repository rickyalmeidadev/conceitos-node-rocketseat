const express = require('express');

const app = express();

app.get('/projects', (request, response) => response.json([
  'Projeto 1',
  'Projeto 2',
  'Projeto 3',
]));

app.post('/projects', (request, response) => response.json([
  'Projeto 1',
  'Projeto 2',
  'Projeto 3',
]));

app.put('/projects/:id', (request, response) => response.json([
  'Projeto 1',
  'Projeto 2',
  'Projeto 3',
]));

app.delete('/projects/:id', (request, response) => response.json([
  'Projeto 1',
  'Projeto 2',
  'Projeto 3',
]));

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
