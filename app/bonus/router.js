
const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.get('/', controller.home);

router.get('/article/:id', controller.article);

router.get('/categorie/:name', controller.category);

module.exports = router;