import express from "express"; 
import os from "node:os";
import config from "./config";
import apiRouter from "./api-router";
import serverRender from "./render";

const server = express();

server.use(express.static("dist")); //add a middleware, a layer for the request (valid or not, what to do)

server.set("view engine", "ejs"); //telling that EJS will be used in the project

server.use("/api", apiRouter); 

server.use("/", async (req, res) => {

    const {initialMarkup} = await serverRender(); //promise
    res.render("index", {
        initialMarkup,
    }); //diplays the ejs templatefile in views folder
});

server.listen(config.PORT, config.HOST, () => { //port, machine host, function
    console.info(`Express server il listening at ${config.SERVER_URL}`,
    `Free mem: ${os.freemem() / 1024 / 1024}`,
    //debugging line should not stay in the code 
    );
});  