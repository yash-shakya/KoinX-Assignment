import coinRouter from "./coin.route.js";

function routes(app){
    app.use("/api",coinRouter);
}

export default routes;