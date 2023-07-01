import { MongoClient } from "mongodb";
import {MONGODB_URL, DATABASE_NAME} from "./config";

let connectedClient;
//async call 
export const connectClient = async () => {
    //if already connected return the same
    if (connectClient){
        return connectedClient.db(DATABASE_NAME);
    }

    //creating the client object
    const client = new MongoClient(MONGODB_URL);
    //connect client
    await client.connect();
    //ping command
    await client.db(DATABASE_NAME).command({ping:1});
    console.info("Connected to MongoDB");
    
    //assing the value to connected client cache
    connectedClient = client;

    return client.db(DATABASE_NAME);
}

export const stopClient = async () => {
    await connectedClient?.close();
}
