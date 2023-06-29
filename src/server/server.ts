import express from "express"; 
import os from "node:os";
import config from "./config";

//TEST
console.log({config});

const server = express();

server.use(express.static("dist")); //add a middleware, a layer for the request (valid or not, what to do)

server.set("view engine", "ejs"); //telling that EJS will be used in the project

server.use("/", (req, res) => {
    //insert the name of the templating file
    res.render("index", {
        // content: "EJS is cool",
        content: "<em>EJS</em> is cool",
    }); //diplays the ejs templatefile in views folder


    //response in webpage at http://0.0.0.0:8080
    // res.send("Test");

});

server.listen(config.PORT, config.HOST, () => { //port, machine host, function
    console.info(`Express server il listening at ${config.SERVER_URL}`,
    `Free mem: ${os.freemem() / 1024 / 1024}`,
    //debugging line should not stay in the code 
    );
});  