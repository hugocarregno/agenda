const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();

//settings
app.set('port', process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());

app.use('/api/logins', require('./routes/logins'));
app.get('*', (req, res) => {
  res.send("Url no válida");
});
//Starting the server
app.listen(app.get('port'));

console.log('server on port ' + app.get('port'));
