const express    = require('express');
const bodyParser = require('body-parser');
const dotenv     = require('dotenv').config();
const db         = require('./db');
const passport   = require('passport');
const cors         = require('cors');
const app        = express();
const getUserRoutes    = require('./routes/Users');
const getEmployeeRoutes    = require('./routes/Employee');
const checkToken = require('./middleware/checkToken');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
getUserRoutes(app);
getEmployeeRoutes(app,checkToken);
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
