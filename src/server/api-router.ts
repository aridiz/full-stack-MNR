/* eslint-disable no-unused-vars */
import express from "express";
import { connectClient } from "./db";
import cors from "cors";

const router = express.Router();
router.use(cors());
router.use(express.json()); //middleware to parse body as json to be represented

//Get the information of all contests
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

//Get the information for a single contest
router.get("/contest/:contestId", async (req,res) => {
    const client = await connectClient();

    const contest = await client
      .collection("contests")
      .findOne({ id: req.params.contestId });

    res.send({ contest }); //TEST object response
});

//POST the information of a single contest
router.post("/contest/:contestId", async (req,res) => {
    const client = await connectClient();
    const {newNameValue} = req.body;
    console.log(newNameValue);
    
    //new document object in MongDB
    const doc = await client
      .collection("contests")
      .findOneAndUpdate(
        { id: req.params.contestId },
        //list of operations to do
        //push an item into a fied that is an array
        {
            $push: {
            names: {
                id: newNameValue.toLowerCase().replace(/\s/g, '-'), //replace all spaces
                name: newNameValue,
                timestamp: new Date(),
            },
        },
    },
    { returnDocument: "after"}, //return the document after the push operation is done
    );

    res.send({ updatedContest: doc.value}); //new list of names
});

// router.get("/contests");
export default router;