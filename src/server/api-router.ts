import express from "express";
import { connectClient } from "./db";

const router = express.Router();

router.get("/contests", async (req,res) => {
    //get the data from MongoDB
    const client = await connectClient();

    const contests = await client.collection("contests")
    .find()
    .project({
        //include only these fields
        id: 1,
        categoryName: 1,
        contestName: 1,
    })
    .toArray();

    res.send({ contests }); //TEST object response
});

// router.get("/contests");
export default router;