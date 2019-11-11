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
const socket  = require('socket.io');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
getUserRoutes(app);
getEmployeeRoutes(app,checkToken);
const hostname = process.env.HOST_NAME;
const port = process.env.PORT;

const server = app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

const io = socket(server);
let UserOnline = [];
io.on("connection", function(socket){
  console.log("Socket Connection Established with ID :"+ socket.id)
    socket.on('register-user', function (data) {
        if(UserOnline.indexOf(data) < 0){
            UserOnline.push(data);
            socket.username = data;
            io.sockets.emit('list-user', UserOnline);
        }
    });
  socket.on("disconnect", function() {
    console.log(socket.id + "Connect Disconnet");
  });
});
