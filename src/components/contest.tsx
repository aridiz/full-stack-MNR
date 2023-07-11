import { useState, useEffect } from "react";
import { fetchContest } from "../api-client";
import Header from "./header";

const Contest = ( {initialContest, onContestListClick} ) => { //receive the id
    const [contest, setContest] = useState(initialContest); //empty ojbect?

    useEffect(() => {
        if (!contest.names) {
            //don't have the data
        fetchContest(contest.id).then((contest) => {
            setContest(contest);
        });
    }
    }, [contest.id, contest.names]); //dependency array - just one network request

    const handleClickContestList = (event) => {
        event.preventDefault();
        onContestListClick(); 
    }; 
    //return HTML contest structure
    return (
        <>
        <Header message={contest.contestName} />
        <div className="contest">
            <div className="title">Contest Description</div>
            <div className="description">{contest.description}</div>
            <a href="/" className="link" onClick={handleClickContestList}>Contests List</a>
        </div>
</>
    );
}

export default Contest;