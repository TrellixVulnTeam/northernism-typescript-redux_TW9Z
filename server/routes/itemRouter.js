const Router = require("express");
const itemController = require("../controllers/itemController");
const router = new Router();
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), itemController.create);
router.patch("/:id", checkRole("ADMIN"), itemController.update);
router.delete("/:id", checkRole("ADMIN"), itemController.delete);
router.get("/", itemController.getAll);
router.get("/:id", itemController.getOne);

module.exports = router;
