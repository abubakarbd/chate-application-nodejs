// external import
const express = require("express");
const { route } = require("express/lib/application");
// internal import
const {getUsers, addUser, removeUser} = require('../controller/usersController');
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const avatarUpload = require("../middleware/users/avatarUpload");
const { addUserValidators, addUserValidationHandler } = require("../middleware/users/userValidators");

const router = express.Router();
// login page
router.get("/", decorateHtmlResponse("Users"), getUsers);
router.post("/", 
avatarUpload,
addUserValidators,
addUserValidationHandler,
addUser
);

router.delete("/:id", removeUser);

module.exports = router;