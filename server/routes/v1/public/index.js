const express = require("express");
const router = new express.Router();


router.use("/home", require("./home"));
router.use("/calculate", require("./calculate"));
router.use("/member", require("./member"));
module.exports = router;
