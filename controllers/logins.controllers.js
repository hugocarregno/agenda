loginsCtrl = {};

const pool = require('../database');

loginsCtrl.getLogins = async (req, res) => {
    const logins = await pool.query('SELECT * FROM login');
    res.json(logins);
};

loginsCtrl.createLogin = async(req, res) => {
  //controlar que el usuario no este repetido
  const { username, password, name, lastname, email } = req.body;
  const newLogin = {
    username,
    password,
    name,
    lastname,
    email
  };
  await pool.query('INSERT INTO login SET ? ', [newLogin]);
  res.redirect('/');
};


module.exports = loginsCtrl;
