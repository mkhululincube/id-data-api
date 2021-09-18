const jwt = require("jsonwebtoken");
const { secret } = require("../../config/auth");

const verifyToken = async (req, res, next) => {
  let token = req.cookies["token"];
  //req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({
      errors: [
        {
          msg: " No token provided"
        }
      ]
    });
  }

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        errors: [
          {
            msg: "Invalid Token"
          }
        ]
      });
    }
    return next();
  });
};

module.exports = {
  verifyToken
};
