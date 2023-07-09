import express from "express";

const router = express.Router();

import testData from "../test-data.json";

router.get("/contests", (req,res) => {
    //get the data from MongoDB
    res.send(testData)

}); //endpoint

// router.get("/contests");

export default router;