const { Router } = require('express');
const { usersController } = require('../controllers');
const { paginate, validate } = require('../middleware');

// /api/users
const usersRouter = Router();

usersRouter
  .route('/')
  .post(usersController.createUser)
  .get((req,res)=> res.send('ok'));

// /api/users/1
usersRouter
  .route('/:userId')
  .patch(() => {})
  .get((req, res) => res.send('ok1'))
  .delete(usersController.deleteUser);

module.exports = usersRouter;

//-------------------------------------------
// onclick <-> HTTPMethod+route
// const listener = () => {};
// button.addEventListener('click',listener)
// button.addEventListener('click',listener1)
// button.addEventListener('click',listener2)