import { MongoClient } from "mongodb"
import {MONGODB_URI, DATABASE_NAME} from "./config"

let connectedClient;
//async call 
export const connectClient = async () => {
    //if already connected return the same
    if (connectedClient){
        return connectedClient.db(DATABASE_NAME);
    }

    //creating the client object
    const client = new MongoClient(MONGODB_URI);
    //connect client
    await client.connect();
    //ping command
    await client.db(DATABASE_NAME).command({ping:1});
    console.info("Connected to MongoDB");
    
    //assing the client to the client cache
    connectedClient = client;

    return client.db(DATABASE_NAME);
}

export const stopClient = async () => {
    //if exists, stop connected client
    await connectedClient?.close();
}
