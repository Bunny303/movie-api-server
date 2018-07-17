import koa from "koa";
import bodyParser from "koa-bodyparser";
import http from "http";
import apiRouter from "./apiRouter";

const app = new koa();
const port = 3000;

app.use(bodyParser())
    .use(apiRouter().routes());

const server = http.createServer(app.callback());
server.listen(port);
