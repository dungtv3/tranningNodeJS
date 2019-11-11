const moogoose = require('mongoose');

const ChatSchema = new moogoose.Schema({
  messgae: String,
  senderId : String,
  receiverId : String,
  create_date : {
    type : Date,
    default : Date.now
  },
  update_date : Date
});

module.exports = moogoose.model('ChatSchema',EmployeeSchema);
