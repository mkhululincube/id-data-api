const { body } = require("express-validator");

const validateSellerRegistrationBody = () => {
  return [
    body("seller_name")
      .exists()
      .withMessage("name field is required")
      .isLength({ min: 3 })
      .withMessage("name must be greater than 3 letters"),
    body("email")
      .exists()
      .withMessage("email field is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("password")
      .exists()
      .withMessage("password field is required")
      .isLength({ min: 8, max: 12 })
      .withMessage("password must be in between 8 to 12 characters long")
  ];
};

const validateSellerLoginBody = () => {
  return [
    body("email")
      .exists()
      .withMessage("email field is required")
      .isEmail()
      .withMessage("Email is invalid"),
    body("password")
      .exists()
      .withMessage("password field is required")
      .isLength({ min: 8, max: 12 })
      .withMessage("password must be in between 8 to 12 characters long")
  ];
};

module.exports = {
  validateSellerRegistrationBody: validateSellerRegistrationBody,
  validateSellerLoginBody: validateSellerLoginBody
};
