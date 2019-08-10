const router = require('express').Router();
const pool = require('../database');
const helpers = require('../lib/helpers');

router.route('/')
  .get((req, res) => {
    console.log("get hola");
  })
  .post(async (req, res) => {
    console.log("sign up");
    const { username, password, password2, name, lastname, email } = req.body;
    //simple validation
    if(!username || !password || !password2 || !name || !lastname || !email ){
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
    const usernameValidator = await pool.query('SELECT * FROM login WHERE username = ?;', [username]);
    if(usernameValidator.length > 0){
      return res.status(400).json({ msg: 'This Username is already registered'});
    }else{
      const passwordValidator = (password != password2) ? true : false;
      if(passwordValidator){
        return res.status(400).json({ msg: 'The passwords are different'});
      }else{
        const emailValidator = await pool.query('SELECT * FROM login WHERE email = ?;', [email]);
        if(emailValidator.length > 0){
          return res.status(400).json({ msg: 'This email address is already registered'});
        }else{
          let newUser = { username, password, name, lastname, email };
          newUser.password = await helpers.encryptPassword(password);
          await pool.query('INSERT INTO login SET ? ', newUser);
          res.json({title: 'User Created'});
          //res.redirect('/');
        }
      }
    }
});

module.exports = router;
