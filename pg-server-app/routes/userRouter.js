const { Router } = require('express');
const { usersController } = require('../controllers')

const usersRouter = Router();

usersRouter
.route('/')
.post(usersController.createUser)
.get((req, res)=>{res.send('ok');});

usersRouter
.route('/:id')
.post(() => {})
.get(() => {})
.delete(() => {});

module.exports = usersRouter;