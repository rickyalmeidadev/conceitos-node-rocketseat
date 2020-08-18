const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.get('/projects', (request, response) => {
  const { title, owner } = request.query;

  console.log('>>> Title: ', title);
  console.log('>>> Owner: ', owner);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.post('/projects', (request, response) => {
  const { title, owner } = request.body;

  console.log('>>> Title: ', title);
  console.log('>>> Owner: ', owner);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;

  console.log('>>> ID: ', id);

  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ]);
});

app.delete('/projects/:id', (request, response) => response.json([
  'Projeto 1',
  'Projeto 2',
  'Projeto 3',
]));

app.listen(5000, () => {
  console.log('Server is running on port 5000...');
});
