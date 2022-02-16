const Koa = require("koa");
const Router = require("@koa/router");

const app = new Koa();
const router = new Router();

const links = `
<a href="/">Anasayfa</a>
<a href="/hakkimda">Hakkımda</a>
<a href="/iletisim">İletişim</a>
`;

router.get("/", (ctx, next) => {
  ctx.set("Content-Type", "text/html; charset=utf-8");
  ctx.body = "<h1>Ana sayfa</h1>" + links;
});
router.get("/hakkimda", (ctx, next) => {
  ctx.set("Content-Type", "text/html; charset=utf-8");
  ctx.body = "<h1>Hakkımızda sayfası</h1>" + links;
});
router.get("/iletisim", (ctx, next) => {
  ctx.set("Content-Type", "text/html; charset=utf-8");
  ctx.body = "<h1>İletişim sayfası</h1>" + links;
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);
