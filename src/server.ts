import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";
import Event from "events";

import { setupDatabase } from  "./database";
import "./shared/container";

import swaggerFile from "./swagger.json";

const startupEvent = new Event();

startupEvent.on('ok', async () => {
    const { router } = await import("./routes");

    const app = express();

    app.use(express.json());

    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

    app.use(router);

    app.listen(3000, () => console.log("Server is running!"));
})

async function start(){
    await setupDatabase();

    startupEvent.emit("ok");
}

start();
