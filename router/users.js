const UsersController = require('../controllers/UsersController');
const express = require('express');
const router = express.Router();

const usersController = new UsersController();

router.get('/', (req, res) => res.send(usersController.getUsers()));

router.get('/:id', (req, res) => {
  const { params: { id } } = req;

  console.log(id);

  res.send(usersController.getUser(Number(id)));
});

router.post('/', (req, res) => {
  const { body } = req;

  res.send(usersController.addUser(body.id, body));
});

router.patch('/', (req, res) => {
  const { body } = req;

  usersController.updateUser(body.id, body);

  res.status(204).send();
});

router.delete('/', (req, res) => {
  const data = { ...req.query, ...req.body };

  usersController.removeUser(data.id);

  res.status(204).send();
});

module.exports = router;
