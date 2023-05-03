const { Router } = require('express');


const usersRouter = Router();

usersRouter
.route('/')
.post(() => {})
.get((req, res)=>{res.send('ok');});

usersRouter
.route('/:id')
.post(() => {})
.get(() => {})
.delete(() => {});

module.exports = usersRouter;