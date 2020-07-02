require('dotenv').config();
const express = require('express');
const { usersRouter } = require('./router');

const app = express();

app.use(express.json());

app.use('/users', usersRouter);

app.use((err, req, res, next) => {
  if (!err) return next();

  console.error(err);

  res.status(500).send({ message: err.message });
});

app.use((req, res) => {
  res.status(404).send({ message: 'Page not found' });
});

app.listen(process.env.PORT, err => err ? console.error(err) : console.info('Started at port ' + process.env.PORT));
