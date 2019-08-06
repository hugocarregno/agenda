const { Router } = require('express');
const router = Router();


const { getLogins, createLogin } = require('../controllers/logins.controllers');


router.route('/')
        .get(getLogins)
        .post(createLogin);


module.exports = router;
