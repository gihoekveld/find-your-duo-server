import express from 'express';

const app = express();

app.get('/ads', (request, response) => {
  return response.json([
    { id: 1, name: 'Ads 1'},
    { id: 2, name: 'Ads 2'},
    { id: 3, name: 'Ads 3'},
    { id: 4, name: 'Ads 4'},
    { id: 5, name: 'Ads 5'},
  ]);
});

app.listen(3333);
