const router = require("express").Router();
const memberController = require("../../../controllers/v1/member");

router.route("/").get(memberController.list).post(memberController.create);
router.route("/:id").get(memberController.show).patch(memberController.update).delete(memberController.del);

module.exports = router;
