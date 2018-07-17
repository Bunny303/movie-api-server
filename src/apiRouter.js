import Router from "koa-router";
import { getAllMovies, getTopMovies, getMovie } from "./controllers/movie";
import { getAllSeries } from "./controllers/series";

const responseBuilder = async (ctx, handler) => {
    try {
        const res = await handler(ctx);

        ctx.status = 200;
        ctx.response.set("Content-Type", "application/json");
        ctx.body = res;
    } catch (error) {
        // TODO: compose error response
    }
};


export default function apiRouter() {
    const router = new Router();

    router.get("/movies", async (ctx) => {
        responseBuilder(ctx, getAllMovies);
    });

    router.get("/series", async (ctx) => {
        responseBuilder(ctx, getAllSeries);
    });

    router.get("/topMovies", async (ctx) => {
        responseBuilder(ctx, getTopMovies);
    });

    router.get("/movies/:id", async (ctx) => {
        responseBuilder(ctx, getMovie);
    });

    return router;
}