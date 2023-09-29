const router = require("express").Router();
const calculateController = require("../../../controllers/v1/calculate");

router.route("/").post(calculateController.calculate);

module.exports = router;
