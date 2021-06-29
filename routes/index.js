const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/categorias', controllers.Categorias);

router.get('/carreteras', controllers.Carreteras);

router.get('/avenida-categoria', controllers.Avenidas);

router.get('/locales', controllers.Locales);

module.exports = router