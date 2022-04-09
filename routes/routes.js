const combineRouters = require('koa-combine-routers')
const testRouter = require("./test");
const userRouter = require("./user");

const router = combineRouters(testRouter, userRouter);

module.exports = router;
