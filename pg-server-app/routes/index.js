const { Router } = require('express');
const usersRouter = require('./userRouter');

const router=Router();

// app.post('/api/users',()=> {});
// app.delete('api/users', () => {});
// app.get('api/phones', () => {});
router.use('/users', usersRouter);


router.get('/phones', (req, res) => {res.status(200).send('ok');});

module.exports = router;