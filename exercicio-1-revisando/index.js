const express = require('express');
const { listJokes } = require('./controller/joke');

const app = express();

app.set('view engine', 'ejs');

app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.get('/', listJokes);

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
