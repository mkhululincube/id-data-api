const express = require('express');
const router =  express.Router();
const users = require("../controllers/users.controller.js");
const { login } = require("../middlewares/auth/login");
const { logout } = require("../middlewares/auth/logout");
const { verifyToken } = require("../middlewares/auth/verifyToken");
const validate = require("../middlewares/fieldsValidation");
  // Products
router.post("/api/v1/user", users.create);
router.get("/api/v1/user/:perPage/:pageNum", users.findAll);

module.exports = router;
