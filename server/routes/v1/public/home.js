const router = require("express").Router();
const homeController = require("../../../controllers/v1/home");

router.route("/").get(homeController.home);
module.exports = router;
