const Router = require("@koa/router");
const router = new Router();

const authController = require("../controller/user");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/resetPassword", authController.resetPassword);

module.exports = router;
