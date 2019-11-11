const User = require('./../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

var createToken = (user) => {
   return jwt.sign({
        exp : Math.floor(Date.now() / 1000) + (7 * 24 * 60 * 60),
        data : user
  },process.env.JWT_SECRET);
}
const UserRoute  = (router) => {

  router.post('/register',async (req,res) => {
    const { username,password } = req.body;
    const user = await User.create({
      username : username ,
      password : bcrypt.hashSync(password,10)});
    if(!user){
      return res.json({
        status : false
      });
    }
    const token = createToken(user.toJSON());
    return res.json({
      token,
      status : true
    });
  });

  router.post('/login',async (req,res,next) => {
      const { username,password } = req.body;
      const users = await User.findOne({ username });
      if(!users){
        return res.json({
          status : false,
          message : 'Username Error!',
        })
      }
      const valid = await users.comparePassword(password);
      if(!valid){
        return res.json({
          status : false,
          message : 'Password Error!',
        })
      }
      const token = createToken(users.toJSON());
      return res.json({
        status : true,
        message : 'Login success',
        token : token,
        users : users['username']
      });
  });
}

module.exports = UserRoute;
