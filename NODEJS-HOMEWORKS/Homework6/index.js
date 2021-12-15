const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  switch (ctx.url) {
    case "/":
      ctx.type = "html";
      ctx.body = "<h1>INDEX PAGE</h1>";
      ctx.status = 200;
      break;
    case "/about":
      ctx.type = "html";
      ctx.body = "<h1>ABOUT PAGE</h1>";
      ctx.status = 200;

      break;
    case "/contact":
      ctx.type = "html";
      ctx.body = "<h1>CONTACT PAGE</h1>";
      ctx.status = 200;

      break;
    default:
      ctx.type = "html";
      ctx.body = "<h1>Page Not Found</h1>";
      ctx.status = 404;
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu port ${port} da çalışmaya başladı...`);
});
