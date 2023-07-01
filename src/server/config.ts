console.log("Config..")
//process.emv
const env = process.env 
// export const PORT = "8080";
export const PORT = env.PORT ?? "8080"; //8080 if there is not port
export const HOST = env.HOST ?? "0.0.0.0";
export const SERVER_URL = `http://${HOST}:${PORT}`;

export const MONGODB_URL = env.MONGODB_URL ?? "mongodb://localhost:27017";
export const DATABASE_NAME = env.DATABASE_NAME ?? "local";


export default {
    // test: true,
    PORT,
    HOST,
    SERVER_URL,
};