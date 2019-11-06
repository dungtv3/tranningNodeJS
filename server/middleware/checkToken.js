const jwt = require('jsonwebtoken');

let checkToken = (req,res, next) => {
  let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto converted to lowercase

  if(token) {
    jwt.verify(token, process.env.JWT_SECRET, (err,decoded) => {
      console.log(decoded);
      if (err) {
        return res.json({
          status: false,
          message: 'Token is not valid'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    })
  }else {
    return res.json({
      status: false,
      message: 'Auth token is not supplied'
    });
  }
}
module.exports = checkToken
