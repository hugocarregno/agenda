const express = require('express');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());

//Starting the server
app.listen(app.get('port'));