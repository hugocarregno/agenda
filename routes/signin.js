const router = require('express').Router();
const pool = require('../database');
const helpers = require('../lib/helpers');
router.route('/')
    .get((req,res) => {
      console.log("hola");
    })
    .post(async (req, res) => {
    console.log("sign in");
    const { username, password } = req.body;
    console.log(username);
    console.log(password);
    //username is already registered
    const rows = await pool.query('SELECT * FROM login WHERE username = ?;', [username]);
    if(rows.length > 0){
      const User = rows[0];
      const validatePassword = await helpers.matchPassword(password, User.password);
      if(validatePassword){
        console.log("login sucess"); //convertir a flash
        res.status(200).send('sucess');
      }else{
        console.log("invalid password"); //convertir a flash
        res.status(401).send('Unauthorized');
      }
    }else {
      console.log("this username is not registered"); //convertir a flash
    }
});

module.exports = router;
