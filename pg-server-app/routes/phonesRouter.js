const { Router } = require('express');

const phonesRouter = Router();

phonesRouter. get('/', (req, res) => res.send('ok'));

module.exports = phonesRouter;