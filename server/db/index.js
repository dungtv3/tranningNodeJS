const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on('error', (error) => {
  console.log('loi ket noi db');
});

db.once('open', () => {
  console.log('Database connection is open!');
});

module.exports = db;
