const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();

//settings
app.set('port', process.env.PORT || 5000);

//middlewares
app.use(cors());
app.use(express.json());

app.use('/api/signin', require('./routes/signin'));
app.use('/api/signup', require('./routes/signup'));

app.get('*', (req, res) => {
  res.send("Url no válida");
});
//Starting the server
app.listen(app.get('port'));

console.log('server on port ' + app.get('port'));
