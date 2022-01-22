// external import
const express = require("express");
// internal import
const {getUsers} = require('../controller/usersController');
const decorateHtmlResponse = require("../middleware/common/decorateHtmlResponse");
const avatarUpload = require("../middleware/users/avatarUpload");

const router = express.Router();
// login page
router.get("/", decorateHtmlResponse("Users"), getUsers);
router.post("/",avatarUpload);

module.exports = router;