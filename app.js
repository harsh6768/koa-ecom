const koa = require("koa");
const app = new koa();
const bodyParser = require("koa-bodyparser");

let port = process.env.PORT || 3000;

const db=require('./repository/db');
const router = require("./routes/routes");

app.use(
  bodyParser({
    onerror: (err, ctx) => {
      log.error({ message: "body parse error", err: err });
      ctx.throw(400, "body parse error");
    },
  })
);

//routes
// app.use(router.routes()).use(router.allowedMethods());
app.use(router());

app.listen(port, () => {
  console.log(`server is up and running on port ${port}`);
});
