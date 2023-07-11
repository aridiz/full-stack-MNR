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
        _id: 0, //removed
    })
    .toArray();

    res.send({ contests }); //TEST object response
});

router.get("/contest/:contestId", async (req,res) => {
    const client = await connectClient();

    const contest = await client
    .collection("contests")
    .findOne({ id: req.params.contestId});

    res.send({ contest }); //TEST object response
});

// router.get("/contests");
export default router;