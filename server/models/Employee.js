const moogoose = require('mongoose');

const EmployeeSchema = new moogoose.Schema({
  name: String,
  age: {
    type : Number,
  },
  dateofbirth: {
    type : Date,
    default : Date.now
  },
  sex: {
    type : Number,
    default : 0
  },
  address : String,
  create_date : {
    type : Date,
    default : Date.now
  },
  update_date : Date
});

module.exports = moogoose.model('Employee',EmployeeSchema);
