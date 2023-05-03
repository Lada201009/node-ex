const { Router } = require('express'); 
const express = require('express');
const {errorHandlers} = require('./middleware');

const app = express();

app.use(express.json());


const router=Router();

app.use('/api', router);

// app.post('/api/users',()=> {});
// app.delete('api/users', () => {});
// app.get('api/phones', () => {});

router.post('/users',()=>{});
router.delete('/users', () => {});
router.get('/phones', (req, res) => {res.status(200).send('ok');});


app.use(errorHandlers.errorHandler);

module.exports = app;