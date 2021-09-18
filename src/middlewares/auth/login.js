const jwt = require("jsonwebtoken");
const sql = require("../../config/db");
const bcrypt = require('bcryptjs');
const { secret } = require("../../config/auth");

const login = (req, res, next) => {

  sql.query(
    `SELECT * FROM users WHERE email = ${sql.escape(req.body.email)};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
        return res.status(400).send({
          msg: err
        });
      }
      if (!result.length) {
        return res.status(401).send({
          msg: 'Username or password is incorrect!'
        });
      }
      // check password
      bcrypt.compare(
        req.body.seller_password,
        result[0]['seller_password'],
        (bErr, bResult) => {
          if (bErr) {
            throw bErr;
            return res.status(401).send({
              msg: 'Username or password is incorrect!'
            });
          }
          if (bResult) {
            const token = jwt.sign({
                seller_email: result[0].seller_email,
                seller_id: result[0].seller_id
              },
              secret, {
                expiresIn: '7d'
              }
            );
            return res.status(200).send({
              msg: 'Logged in!',
              token,
              user: result[0]
            });
          }
          return res.status(401).send({
            msg: 'Username or password is incorrect!'
          });
        }
      );
    }
  );

};

module.exports = {
  login
};