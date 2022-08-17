const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const routes = require('./routes/routes');

app.use(bodyParser.json());

app.use(routes);

app.listen(4494);
