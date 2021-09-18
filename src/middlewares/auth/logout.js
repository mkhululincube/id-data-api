// const jwt = require("jsonwebtoken");
// const { secret } = require("../../config/auth");
const logout = (req, res, next) => {
  res.cookie("token", "");
  res.json({
    message: "cookie destroyed "
  });
};

module.exports = {
  logout
};
