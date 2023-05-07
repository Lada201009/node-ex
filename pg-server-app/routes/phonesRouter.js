const { Router } = require('express');
const { phonesController} = require('../controllers');

// /api/phones
const phonesRouter = Router();

phonesRouter
.route('/')
.get(phonesController.getPhones);

module.exports = phonesRouter;