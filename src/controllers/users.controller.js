const User = require("../models/users.model");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  } 
  bcrypt.hash(req.body.data_hash, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      name: req.body.name,
      someNote: req.body.someNote,
      age: req.body.age,
      city: req.body.city
    });

    User.create(user, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      else res.send(data);
    });
  });
};

exports.findAll = (req, res) => {

  const pagination = {
    "perPage" : parseInt(req.params.perPage),
    "pageNum" : parseInt(req.params.pageNum)
  }


  User.getAll(pagination,(err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving products."
      });
    else res.send(data);
  });
};
