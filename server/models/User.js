const moogoose = require('mongoose'),
      bcrypt = require('bcrypt');

var UserSchema = new moogoose.Schema({
    username : {type: String},
    email : {type: String},
    password : {type: String},
    role : {type: String},
});
UserSchema.methods.comparePassword = function(hash_password) {
  return bcrypt.compareSync(hash_password, this.password);
}


module.exports = moogoose.model('User',UserSchema);
