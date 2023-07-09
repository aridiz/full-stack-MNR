import express from "express";

const router = express.Router();

import testData from "../test-data.json"; //mock data object

router.get("/contests", (req,res) => {
    //get the data from MongoDB
    res.send({ contests: testData }); //TEST object response
});

// router.get("/contests");
export default router;