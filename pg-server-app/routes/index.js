const { Router } = require('express');
const phonesRouter = require('express');
const usersRouter = require('./userRouter');

const router=Router();

router.use('/users', usersRouter);


router.use('/phones', phonesRouter);

module.exports = router;