const router = require('express').Router();

const {home, about} = require('../controllers/mainController');


router.get('/', home);
router.get('/about',about)

module.exports = router;