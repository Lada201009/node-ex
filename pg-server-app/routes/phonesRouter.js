const { Router } = require('express');
const { phonesController} = require('../controllers');
const { paginate, validate } = require('../middleware');

// /api/phones
const phonesRouter = Router();

phonesRouter
.route('/')
.get(phonesController.getPhones);

module.exports = phonesRouter;